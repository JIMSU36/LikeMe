import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import moment from "moment";
import { useApplicationContext } from "../Contexts/TabContext";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import AuthContext from "../Contexts/AuthContext";

import Config from '../config'

const DetailContents = ({data}) => {
    const { user } = useContext(AuthContext);
    const [detailData, setDetailData] = useState("");
    const navigate = useNavigate();
    const { tab } = useApplicationContext();
    const { setTab } = useApplicationContext();
    console.log(detailData)
    
    useEffect(()=>{
        FetchData();
    },[])

    const FetchData = () => {
        data.tab === "instructor" ? (
            axios
            .get(`${Config.restApi}/getInstructor/`+data.data.id)
            .then((response) => {
                setDetailData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        ) : data.tab === "trainer" && (
            axios
            .get(`${Config.restApi}/getTrainer/`+data.data.id)
            .then((response) => {
                setDetailData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        )
       
    }

	const handleChange = (value) => {
		setTab(value);
        console.log(tab)
        navigate("/Academy")
	};

    const deletePost = (id) => {
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            if(data.tab === "instructor"){
                axios.delete(`${Config.restApi}/deleteInstructor/`+id)
                .then((response) => {
                    navigate(-1);
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else if(data.tab === "trainer"){
                axios.delete(`${Config.restApi}/deleteTrainer/`+id)
                .then((response) => {
                    navigate(-1);
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
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
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>{data.parentPageName}</Label>
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
                        <Label className="font-bold md:text-3xl text-lg">Read Post From {data.parent}</Label>
                </div>
                <div className=" w-full h-full text-left">
                    <p
                        className="w-full h-full md:max-w-[80%] max-w-[250px] text-ellipsis overflow-hidden h-[8vh] md:text-4xl text-xl font-bold"
                    >
                        {detailData.title}
                    </p>
                </div>
                <div className="flex">
                    <hr
                        className="w-[10vh] bg-[#93AEF9] h-2 my-4"
                    />
                    <div className="ml-auto flex md:flex-row flex-col md:space-x-4">
                        <Label className="text-gray-400 md:text-sm text-xs">작성일 : {moment(detailData.created_at).format('YYYY-MM-DD')}</Label>
                        {detailData.updated_at && (
                            <Label className="text-gray-400 md:text-sm text-xs">수정일 : {moment(detailData.updated_at).format('YYYY-MM-DD')}</Label>
                        )}
                    </div>
                    
                </div>
                <div className="min-h-[50vh] text-left border-y md:p-10 p-4 " dangerouslySetInnerHTML={{__html: detailData.content}}>
                </div>
                <div className="flex justify-end my-4 space-x-2">
                    <Button className="bg-yellow-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{navigate(-1)}}>뒤로가기</Button>
                    {user && (
                        <>
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
                                        tab:tab === "강사양성과정" ? "instructor" : tab === "트레이너교육과정" && "trainer",
                                        data: detailData,
                                    }
                                })
                            }}
                        >
                            수정
                        </Button>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailContents;