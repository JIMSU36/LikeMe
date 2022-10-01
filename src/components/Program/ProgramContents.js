import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

//images
import typeDiet from '../../assets/images/8가지.jpg';
import bodyprofile from '../../assets/images/바디프로필.jpg';
import child from '../../assets/images/청소년.jpg';
import pain from '../../assets/images/통증.jpg';
import worker from '../../assets/images/직장인.jpg';
import mainLogo from '../../assets/images/main_logo.png';
import Select from 'react-select';

const ProgramContents = () => {
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [selectPlace, setSelectPlace] = useState("")

    const places = [
        { value: '마곡역점', label: '마곡역점'},
        { value: '우장산역점', label: '우장산역점'},
    ]

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh]  w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>프로그램</Label>
                </div>
            </div>
            <div className='w-full min-h-[100vh] bg-white relative '>
                {/* pc화면 */}
                <div className='m-auto py-12 hidden md:grid grid-cols-2 w-[70vw] h-full'>
                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>오리엔테이션 프로그램 체험</Label>
                        
                        <Select
                            className='program-select mt-10 w-[10vw] h-[5vh] m-auto'
                            placeholder='지점 선택' 
                            options={places}  
                            value={places.find((op)=>{
                                return op.value === selectPlace;
                            })}
                            onChange={(e)=>{
                                if(e.value === "마곡역점"){
                                    window.open('https://naver.me/FzHyeLd7', '_blank')
                                }else if(e.value === "우장산역점"){
                                    window.open('https://naver.me/xagwCqkd', '_blank')
                                }
                            }}
                            styles={{
                                // Fixes the overlapping problem of the component
                                menu: (places) => ({ ...places, zIndex: 99999 }),
                                control: (base, state) => ({
                                     ...base,
                                     background: "#93AEF9", 
                                     border:"none", 
                                     width:"10vw", 
                                     height:"5vh", 
                                     color:"white",
                                     boxShadow: "none"
                                    }),
                            }}
                        />
                        {/* <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                window.open('https://naver.me/FzHyeLd7', '_blank')
                            }}
                        >
                            네이버 예약
                        </Button> */}
                    </div>
                    <div className='img_area h-[50vh] relative flex justify-center items-center '>
                        <img src={mainLogo}/>
                    </div>


                    <div className='h-[50vh] m-auto'>
                        <img src={typeDiet} className="h-full w-full"/>
                    </div>
                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>8가지 비만유형에 따른 다이어트</Label>
                        {/* <span className='mt-6 text-lg'>
                            8가지 비만 유형에 따라 
                        </span>
                        <span className='text-lg'>
                            유산소 + 복합 웨이트 트레이닝 / 식단 비율 조절 프로그램
                        </span> */}

                        <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"8가지 비만유형에 따른 다이어트", {
                                    state:{
                                        program:"8가지 비만유형에 따른 다이어트",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>

                    
                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>바디프로필 메이킹</Label>
                        
                        <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"바디프로필 메이킹", {
                                    state:{
                                        program:"바디프로필 메이킹",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>
                    <div className='h-[50vh] m-auto'>
                        <img src={bodyprofile} className="h-full w-full"/>
                    </div>


                    <div className='h-[50vh] m-auto'>
                        <img src={child} className="h-full w-full"/>
                    </div>
                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>청소년 성장</Label>
                        <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"청소년 성장", {
                                    state:{
                                        program:"청소년 성장",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>


                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>통증관리 (근막이완)</Label>

                        <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"통증관리", {
                                    state:{
                                        program:"통증관리",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>
                    <div className='h-[50vh] m-auto'>
                        <img src={pain} className="h-full w-full"/>
                    </div>


                    <div className='h-[50vh] m-auto'>
                        <img src={worker} className="h-full w-full"/>
                    </div>
                    <div className='p-12 flex flex-col'>
                        <hr className='w-[5vw] h-4 bg-[#93AEF9] border-none m-auto mb-4'/>
                        <Label className='font-bold text-3xl'>직장인 일자목 + 허리 교정</Label>
                        
                        <Button 
                            className='mt-10 rounded-lg w-[10vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"직장인 일자목 + 허리 교정", {
                                    state:{
                                        program:"직장인 일자목 + 허리 교정",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>
                </div>

                {/* 모바일 화면 */}
                <div className='m-auto py-12 grid md:hidden grid-cols-1 w-[80vw] h-full'>
                    <div className='relative flex justify-center items-center h-[20vh]'>
                        <img src={mainLogo}/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>오리엔테이션 프로그램 체험</Label>

                        <Select
                            className='program-select mt-4 m-auto font-bold'
                            placeholder='지점 선택' 
                            options={places}  
                            value={places.find((op)=>{
                                return op.value === selectPlace;
                            })}
                            onChange={(e)=>{
                                if(e.value === "마곡역점"){
                                    window.open('https://naver.me/FzHyeLd7', '_blank')
                                }else if(e.value === "우장산역점"){
                                    window.open('https://naver.me/xagwCqkd', '_blank')
                                }
                            }}
                            styles={{
                                // Fixes the overlapping problem of the component
                                menu: (places) => ({ ...places, zIndex: 99999 }),
                                control: (base, state) => ({
                                        ...base,
                                        background: "#93AEF9", 
                                        border:"none", 
                                        width:"50vw", 
                                        height:"5vh", 
                                        color:"white",
                                        boxShadow: "none"
                                    }),
                            }}
                        />
                    </div>
                    

                    <div className='h-[20vh] m-auto mt-20'>
                        <img src={typeDiet} className="h-full w-full"/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>8가지 비만유형에 따른 다이어트</Label>

                        <Button 
                            className='mt-4 rounded-lg w-[50vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"8가지 비만유형에 따른 다이어트", {
                                    state:{
                                        program:"8가지 비만유형에 따른 다이어트",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>


                    <div className='h-[20vh] m-auto mt-20'>
                        <img src={bodyprofile} className="h-full w-full"/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>바디프로필 메이킹</Label>

                        <Button 
                            className='mt-4 rounded-lg w-[50vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"바디프로필 메이킹", {
                                    state:{
                                        program:"바디프로필 메이킹",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>


                    <div className='h-[20vh] m-auto mt-20'>
                        <img src={child} className="h-full w-full"/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>청소년 성장</Label>

                        <Button 
                            className='mt-4 rounded-lg w-[50vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"청소년 성장", {
                                    state:{
                                        program:"청소년 성장",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>


                    <div className='h-[20vh] m-auto mt-20'>
                        <img src={pain} className="h-full w-full"/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>통증관리 (근막이완)</Label>

                        <Button 
                            className='mt-4 rounded-lg w-[50vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"통증관리", {
                                    state:{
                                        program:"통증관리",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>


                    <div className='h-[20vh] m-auto mt-20'>
                        <img src={worker} className="h-full w-full"/>
                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-[20vw] h-2 bg-[#93AEF9] border-none m-auto my-4'/>
                        <Label className='font-bold text-xl'>직장인 일자목 + 허리 교정</Label>

                        <Button 
                            className='mt-4 rounded-lg w-[50vw] m-auto h-[5vh] font-bold text-white bg-[#93AEF9] hover:text-white hover:bg-[#758BC7]'
                            onClick={()=>{
                                navigate(thisPage+"/"+"직장인 일자목 + 허리 교정", {
                                    state:{
                                        program:"직장인 일자목 + 허리 교정",
                                        parent:"프로그램"
                                    }
                                })
                            }}
                        >
                            자세히 보기
                        </Button>
                    </div>
                </div>


                <div className='md:w-[70vw] w-[80vw] m-auto text-left py-12'>
                    <Label className='font-bold text-gray-400 md:text-base text-xs'>※ 프로그램은 고객 체형 및 체력 질환 등에 따라 변경될 수 있습니다</Label>
                </div>
            </div>
        </div>
        </>
    )
}

 export default ProgramContents;