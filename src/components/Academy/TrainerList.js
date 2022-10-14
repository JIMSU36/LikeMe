import React, { lazy, useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
    Label,
    Button,
    Input,
    InputGroup
} from "reactstrap";
import { BiSearchAlt } from "react-icons/bi";
import dayjs from 'dayjs';
import AuthContext from '../../Contexts/AuthContext';
import Config from "../../config";
import DataTable from 'react-data-table-component';
const loading = import("../Loading");
const Loading = lazy(() => loading);

const TrainerList = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [loading, setLoading] = useState(true);
    const [rowData, setRowData] = useState([]);
    const [filterKeyword, setFilterKeyword] = useState("");

    useEffect(()=>{
        setLoading(true);
        document.body.style.overflow = "hidden";
        axios
        .get(`${Config.restApi}/getTrainer/`)
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);
            setLoading(false)
            document.body.style.overflow = "unset";
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])


    const showDetail = (row, idx) => {
        navigate(thisPage+"/"+row.title, {
            state:{
                data:row,
                parentPageName:"아카데미",
                tab:"trainer",
                parent:"Academy",
            }
        })
    }

    const PCcolumns = [
        {
            selector: row => row.date,
            style: {
                maxWidth:"20%",
                marginLeft:"20px"
                
            }
        },
        {
            selector: row => row.title,
        },
        {
            selector: row => row.thumb,
            style: {
                maxWidth:"300px",
                maxHeight:"15vh",
                marginRight:"20px"
            }
        },
    ];

    const Mobilecolumns = [
        {
            selector: row => row.date,
            style: {
                maxWidth:"100%",
            }
        },
        {
            selector: row => row.title,
        },
        {
            selector: row => row.thumb,
            style: {
                maxWidth:"300px",
                maxHeight:"15vh",
                marginRight:"20px"
            }
        },
    ]
    const PCdata = rowData.filter((val)=>{
        if(filterKeyword == ""){
            return val
        }else if(val.title.toLowerCase().includes(filterKeyword.toLowerCase())){
            return val
        }
        }).sort((a, b) =>{
            return b.id - a.id
        }).map((row, index)=>{
            return{
                id:row.id,
                date:(
                    <div className='date-cell w-full flex flex-col justify-center'>
                        <Label className='date-label font-bold text-gray-300 text-4xl'>{dayjs(row.created_at).format('MM.DD')}</Label>
                        <Label className='date-label font-bold text-gray-300 text-xl'>{dayjs(row.created_at).format('YYYY')}</Label>
                    </div>
                ),
                title:(
                    <div className='title-cell'>
                        <p className='my-4 text-lg text-ellipsis overflow-hidden'>{row.title}</p>
                    </div>
                ),
                thumb:(
                    <div className='thumb-cell text-center leading-[15vh]'>
                        {row.decodeImg !== "" && (
                            <img
                                className='m-auto row-img p-2'
                                src={row.decodeImg}
                                alt={row.decodeImg !== "" ? row.title+" thumb" : ""}
                                fetchpriority="high"
                                loading='lazy'
                                decoding='async'
                                width={"100%"}
                                height={"100%"}
                            />
                        )}
                    </div>
                ),
            }
    })
    const Mobiledata = rowData.filter((val)=>{
        if(filterKeyword == ""){
            return val
        }else if(val.title.toLowerCase().includes(filterKeyword.toLowerCase())){
            return val
        }
        }).sort((a, b) =>{
            return b.id - a.id
        }).map((row, index)=>{
            return{
                id:row.id,
                date:(
                    <Label className='date-label font-bold text-gray-300 text-xl'>{dayjs(row.created_at).format('YYYY.MM.DD')}</Label>
                ),
                title:(
                    <p className='max-w-[250px] my-4 text-ellipsis overflow-hidden'>{row.title}</p>
                ),
                thumb:(
                    row.decodeImg !== "" && (
                        <img
                            className='m-auto row-img'
                            src={row.decodeImg}
                            alt="thumb"
                            fetchpriority="high"
                            loading='lazy'
                            decoding='async'
                            width={"100%"}
                            height={"100%"}
                        />
                    )
                ),
            }
    })

    return(
        <>
        <div className="w-[80vw] h-full m-auto">
            {user && (
                <div className='flex'>
                    <Button 
                        className='add-btn md:ml-auto  my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                        onClick={()=>{
                            navigate(thisPage+"/AddNewPost", {
                                state:{
                                    parentPageName:"아카데미",
                                    parent:"Academy",
                                    tab:"trainer",
                                    action:"add"
                                }
                            })
                        }}
                    >
                        + Add New
                    </Button>
                </div>
            )}
            {loading && 
                <Loading/>
            }
            {/* pc 테이블 */}
            <div className='mt-12 w-full flex justify-start py-10 border-t-2' style={{borderTopColor:"#93AEF9"}}>
                <InputGroup className='border p-4 rounded-lg m-auto'>
                    <Input 
                        className='focus:outline-none w-[30vw] h-[2vh]'
                        placeholder="Search"
                        value={filterKeyword}
                        type="text"
                        onChange={(e) => {
                            setFilterKeyword(e.target.value);
                        }}
                    />
                    <BiSearchAlt size={20} className="inline-block align-middle"/>
                </InputGroup>
            </div>
            <div className='w-full h-full md:table hidden'>
                <DataTable
                    columns={PCcolumns}
                    data={PCdata}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}	
                    onRowClicked={(e)=>{
                        let temp={title:"", id:""};
                        temp.title=e.title.props.children.props.children
                        temp.id=e.id
                        showDetail(temp)
                    }}
                    pointerOnHover={true}
                />
            </div>

            {/* 모바일 테이블 */}
            <div className='mobile-table w-full h-full table-auto table md:hidden'>
                <DataTable
                    columns={Mobilecolumns}
                    data={Mobiledata}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}	
                    onRowClicked={(e)=>{
                        let temp={title:"", id:""};
                        console.log(e)
                        temp.title=e.title.props.children
                        temp.id=e.id
                        showDetail(temp)
                    }}
                    pointerOnHover={true}
                />
            </div>
        </div>
        </>
    )
}

export default TrainerList;