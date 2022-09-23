import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink,
    Input
} from "reactstrap";
import moment from "moment";
import { useApplicationContext } from "../Contexts/TabContext";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";

const DetailContents = ({data}) => {
    const [detailData, setDetailData] = useState("");
    const navigate = useNavigate();
    const { tab } = useApplicationContext();
    const { setTab } = useApplicationContext();
    

    useEffect(()=>{
        FetchData();
    },[])

    const FetchData = () => {
        axios
        .get("http://127.0.0.1:8000/getInstructor/"+data.data.id)
        .then((response) => {
            setDetailData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

	const handleChange = (value) => {
		setTab(value);
        console.log(tab)
        navigate("/Academy")
	};

    const deletePost = (id) => {
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            axios.delete("http://127.0.0.1:8000/deleteInstructor/"+id)
            .then((response) => {
                navigate(-1);
                
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
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh]  w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>{data.parentPageName}</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={tab === "강사양성과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                handleChange("강사양성과정")
                            }}
                        >
                            강사양성과정
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={tab === "트레이너교육과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                handleChange("트레이너교육과정")
                            }}
                        >
                            트레이너교육과정
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="w-[80vw] min-h-[100vh] h-full m-auto pb-20">
                <div className="pt-20 pb-10 text-left flex">
                        <BsBookmark size={30} className="my-auto mr-4"/>
                        <Label className="font-bold text-3xl">Read Post From {data.parent}</Label>
                </div>
                <div className=" w-full h-full text-left">
                    <Label
                        className="w-full h-full h-[8vh] text-4xl font-bold"
                    >
                        {detailData.title}
                    </Label>
                </div>
                <div>
                    <hr
                        className="w-[10vh] bg-black h-2 my-4"
                    />
                </div>
                <div className="min-h-[50vh] text-left border-[1px] rounded-lg p-10 " dangerouslySetInnerHTML={{__html: detailData.content}}>
                </div>
                <div className="flex justify-end my-4 space-x-2">
                    <Button className="bg-yellow-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{navigate(-1)}}>뒤로가기</Button>
                    <Button 
                        className="bg-red-500 font-bold text-white py-2 px-5 rounded-lg" 
                        onClick={()=>{
                            deletePost(detailData.id);
                        }}
                    >
                        삭제
                    </Button>
                    <Button 
                        className="bg-green-500 font-bold text-white py-2 px-5 rounded-lg" 
                        onClick={()=>{
                            navigate("/"+data.parent+"/EditPost"+"/"+detailData.title, {
                                state:{
                                    parentPageName:"아카데미",
                                    parent:"Academy",
                                    action: "edit",
                                    data: detailData,
                                }
                            })
                        }}
                    >
                        수정
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailContents;