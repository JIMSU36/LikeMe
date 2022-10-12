import React, { useContext, useEffect, useState } from "react"
import {
    Label,
    Button,
    List,
} from "reactstrap";
import axios from "axios";
import Config from "../../config";
import { useNavigate } from "react-router-dom"
import AuthContext from "../../Contexts/AuthContext"

const Instructor = () => {
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [rowData, setRowData] = useState([]);
    const [arrInstructor, setArrInstructor] = useState([]);

    useEffect(()=>{
        axios
        .get(`${Config.restApi}/getTrainerList/`)
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);

            response.data.sort((a, b)=>{
                return b.id - a.id
            }).map((row, idx)=>{
                arrInstructor.push(row.decodeImg);
                setArrInstructor(arrInstructor);
                forceUpdate();
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    },[arrInstructor]);

    console.log(rowData)

    const deleteInstructor = (id) => {
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            axios.delete(`${Config.restApi}/deleteTrainerList/`+id)
            .then((response) => {
                setArrInstructor([]);
                forceUpdate();
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{   //취소
            return false;
        }        
    }

    return(
        <>
        {user && (
            <div className='w-[80vw] flex'>
                <Button 
                    className='add-btn md:ml-auto  my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                    onClick={()=>{
                        navigate(thisPage+"/AddNewPost", {
                            state:{
                                parentPageName:"라이크미",
                                parent:"LikeMe",
                                tab:"teachers",
                                action:"add"
                            }
                        })
                    }}
                >
                    + Add New
                </Button>
            </div>
        )}
        {/* pc화면 */}
        <div className="w-[80vw] h-full m-auto hidden md:grid grid-cols-2 gap-y-12 ">
            
            {rowData.map((row, index)=>{
                return(
                    index%2 === 1 ? (
                        <>
                        <div className="w-[80%] text-left text-lg font-semibold my-auto ">
                            <div className="flex flex-col">
                                <List className="space-y-4">
                                    {row.qualification_arr.map((row, index)=>{
                                        return <li>{row}</li>
                                    })}
                                </List>
                            </div>
                            <hr className="my-12 h-1" style={{backgroundColor:row.color_code.hex}}/>
                            <div className="flex">
                                <Label className="w-[80%] font-bold xl:text-5xl lg:text-4xl">{row.trainer_name}</Label>
                                {user && (
                                    <>
                                    <div className="absolute translate-y-20">
                                        <div className="flex space-x-2">
                                            <Button 
                                                className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    navigate(thisPage+"/AddNewPost", {
                                                        state:{
                                                            parentPageName:"라이크미",
                                                            parent:"LikeMe",
                                                            tab:"teachers",
                                                            action:"edit",
                                                            data: row.id
                                                        }
                                                    })
                                                }}
                                            >
                                                수정
                                            </Button>
                                            <Button 
                                                className="bg-red-400 hover:bg-red-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    deleteInstructor(row.id);
                                                }}
                                            >
                                                삭제
                                            </Button>
                                        </div>
                                    </div>
                                    </>
                                )}
                                <div className="w-[120%] ml-4 grid grid-col-1 gap-y-2 font-bold xl:text-2xl">
                                    {row.history_arr.map((row, index)=>{
                                        return <Label>{row}</Label>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="m-auto ">
                            <img src={row.decodeImg} />
                        </div>
                        </>
                    ) : index%2 === 0 && (
                        <>
                        <div className="m-auto">
                            <img src={row.decodeImg} />
                        </div>
                        <div className="ml-auto w-[80%] text-left text-lg font-semibold my-auto ">
                            <div className="flex flex-col  space-y-4">
                                <List className="space-y-4">
                                    {row.qualification_arr.map((row, index)=>{
                                        return <li>{row}</li>
                                    })}
                                </List>
                            </div>
                            <hr className="my-12 h-1" style={{backgroundColor:row.color_code.hex}}/>
                            <div className="flex">
                                <Label className="w-[80%] font-bold xl:text-5xl lg:text-4xl">{row.trainer_name}</Label>
                                {user && (
                                    <>
                                    <div className="absolute translate-y-20">
                                        <div className="flex space-x-2">
                                            <Button 
                                                className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    navigate(thisPage+"/AddNewPost", {
                                                        state:{
                                                            parentPageName:"라이크미",
                                                            parent:"LikeMe",
                                                            tab:"teachers",
                                                            action:"edit",
                                                            data: row.id
                                                        }
                                                    })
                                                }}
                                            >
                                                수정
                                            </Button>
                                            <Button 
                                                className="bg-red-400 hover:bg-red-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    deleteInstructor(row.id);
                                                }}
                                            >
                                                삭제
                                            </Button>
                                        </div>
                                    </div>
                                    </>
                                )}
                                <div className="w-[120%] ml-4 grid grid-col-1 gap-y-2 font-bold xl:text-2xl">
                                    {row.history_arr.map((row, index)=>{
                                        return <Label>{row}</Label>
                                    })}
                                </div>
                            </div>
                        </div>
                        </>
                    )
                )
            })}
        </div>
        </>
    )
}

export default Instructor