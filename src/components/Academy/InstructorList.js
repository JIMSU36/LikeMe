import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import moment from 'moment';
import AuthContext from '../../Contexts/AuthContext';

import Config from "../../config";

const InstructorList = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [rowData, setRowData] = useState([]);


    useEffect(()=>{
        axios
        .get(`${Config.restApi}/getInstructor`)
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);
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
                tab:"instructor",
                parent:"Academy",
            }
        })
    }

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
                                    tab:"instructor",
                                    action:"add"
                                }
                            })
                        }}
                    >
                        + Add New
                    </Button>
                </div>
            )}
            {/* pc 테이블 */}
            <Table responsive className='w-full h-full mt-12 md:table hidden' >
                <tbody className='border-t border-gray-500'>
                    {rowData.sort((a, b) =>{
                        return b.id - a.id
                    }).map((row, index) =>{
                        return(
                            <tr className='table-row h-[15vh] pl-6 border-b cursor-pointer' onClick={()=>showDetail(row, index)}>
                                <td className='w-[20%]'>
                                    <div className='w-full flex flex-col'>
                                        <Label className='date-label font-bold text-gray-300 text-4xl'>{moment(row.created_at).format('MM.DD')}</Label>
                                        <Label className='date-label font-bold text-gray-300 text-xl'>{moment(row.created_at).format('YYYY')}</Label>
                                    </div>
                                </td>
                                <td className='text-left px-12'>
                                    <p className='max-w-[70%] my-4 text-ellipsis overflow-hidden'>{row.title}</p>
                                </td>
                                <td className='pr-6 w-[30%]'>
                                    <div className='text-center leading-[15vh]'>
                                        {row.decodeImg !== "" && (
                                            <img
                                                className='m-auto row-img'
                                                src={row.decodeImg}
                                                alt="thumb"
                                            />
                                        )}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {/* 모바일 테이블 */}
            <Table responsive className='w-full h-full mt-12 table-auto table md:hidden' >
                <tbody className='border-t border-gray-500'>
                    {rowData.sort((a, b) =>{
                        return b.id - a.id
                    }).map((row, index) =>{
                        return(
                            <tr className='table-row h-[20vh] pl-6 border-b cursor-pointer' onClick={()=>showDetail(row, index)}>
                                <td className=''>
                                    <div className='w-full flex flex-col text-left my-12'>
                                        <Label className='date-label font-bold text-gray-300 text-xl'>{moment(row.created_at).format('YYYY.MM.DD')}</Label>
                                        <p className='max-w-[250px] my-4 text-ellipsis overflow-hidden'>{row.title}</p>
                                        {row.decodeImg !== "" && (
                                            <img
                                                className='m-auto row-img'
                                                src={row.decodeImg}
                                                alt="thumb"
                                            />
                                        )}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        </>
    )
}

export default InstructorList