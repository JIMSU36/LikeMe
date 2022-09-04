import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Label,
    Button,
    Table,
} from "reactstrap";

const InstructorList = (props) => {
    const navigate = useNavigate();
    const thisPage = window.location.pathname;

    const [rowData, setRowData] = useState([
        {
            writer:"admin",
            title:"test title 1",
            date:"2022-09-04",
        },
        {
            writer:"admin",
            title:"test title 2",
            date:"2022-09-04",
        },
        {
            writer:"admin",
            title:"test title 3",
            date:"2022-09-04",
        },
    ]);


    return(
        <>
        <div className="w-[70vw] h-full m-auto">
            <div className='flex'>
                <Button 
                    className='ml-auto my-4 px-4 py-2 bg-gray-400 rounded-lg text-white font-bold hover:bg-gray-500'
                    onClick={()=>{
                        navigate(thisPage+"/AddNewPost", {
                            state:{
                                parentPageName:"아카데미",
                                parent:"Academy"
                            }
                        })
                    }}
                >
                    + Add New
                </Button>
            </div>
            <Table responsive className='w-full h-full' >
                <tbody className='border-t border-gray-500'>
                    {rowData.map((row, index)=>{
                        return(
                            <tr className='h-[15vh] pl-6 border-b hover:bg-gray-200'>
                                <td className='w-[20%]'>{row.date}</td>
                                <td className='text-left px-6'>{row.title}</td>
                                <td className='pr-6'>
                                    <div className='w-full h-full text-center leading-[15vh] border'>
                                        img
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