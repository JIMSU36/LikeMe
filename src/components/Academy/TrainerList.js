import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import moment from 'moment';

const TrainerList = () => {
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [rowData, setRowData] = useState([]);

    useEffect(()=>{
        axios
        .get("http://127.0.0.1:8000/getTrainer/")
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
                tab:"trainer",
                parent:"Academy",
            }
        })
    }


    return(
        <>
        <div className="w-[70vw] h-full m-auto">
            <div className='flex'>
                <Button 
                    className='ml-auto my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
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
            <Table responsive className='w-full h-full' >
                <tbody className='border-t border-gray-500'>
                    {rowData.sort((a, b) =>{
                        return b.id - a.id
                    }).map((row, index) =>{
                        return(
                            <tr className='h-[15vh] pl-6 border-b hover:bg-gray-200 cursor-pointer' onClick={()=>showDetail(row, index)}>
                                <td className='w-[20%]'>
                                    <div className='w-full flex flex-col'>
                                        <Label className='date-label font-bold text-gray-300 text-4xl'>{moment(row.created_at).format('MM.DD')}</Label>
                                        <Label className='date-label font-bold text-gray-300 text-xl'>{moment(row.created_at).format('YYYY')}</Label>
                                    </div>
                                </td>
                                <td className='text-left px-6'>{row.title}</td>
                                <td className='pr-6 w-[30%]'>
                                    <div className='text-center leading-[15vh]'>
                                        {row.img !== null && (
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

export default TrainerList