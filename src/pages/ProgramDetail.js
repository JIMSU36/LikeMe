import React from "react";
import { useLocation } from "react-router-dom";
import ContentSideDot from "../components/Dot/ContentSideDot";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import {
    Label,
    Button,
} from "reactstrap";

//viedo
import ReactPlayer from 'react-player'
import typeDiet from '../assets/video/다이어트.mp4';
import bodyprofile from '../assets/video/바디프로필.mp4';
import child from '../assets/video/청소년.mp4';
import pain from '../assets/video/통증.mp4';
import worker from '../assets/video/직장인.mp4';
import TypeDiet from "../components/Program/TypeDiet";
import BodyProfile from "../components/Program/BodyProfile";
import Child from "../components/Program/Child";
import Pain from "../components/Program/Pain";
import Worker from "../components/Program/Worker";


const ProgramDetail = () => {
    const location = useLocation();
    const parent = location.state.parent;
    const programName = location.state.program;


    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-col'>  
                <div id="1" name="1" className='content'>
                    <div className='h-[1px] bg-transparent'></div>
                </div>
                <div id="5" name="5" className='content'>
                    <div className='banner h-[40vh] w-full relative bg-gray-400'>
                        <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                            <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>{parent}</Label>
                        </div>
                    </div>
                    <div className='w-full min-h-[100vh] py-20 bg-white'>
                        <Label className='font-bold text-4xl'>{programName}</Label>
                        
                        <div className="w-full h-full pt-20 ">
                            <div className="w-[50vw] bg-blue-300 m-auto">
                                <ReactPlayer
                                    className=""
                                    width={'100%'}
                                    height={'100%'}
                                    url={programName === "8가지 비만유형에 따른 다이어트" ? typeDiet : programName === "바디프로필 메이킹" ? bodyprofile : programName === "청소년 성장" ? child : programName === "통증관리" ? pain : programName === "직장인 일자목 + 허리 교정" && worker}
                                    playing={true}
                                    muted={true}
                                    controls={true}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className="w-full h-full">
                            {programName === "8가지 비만유형에 따른 다이어트" ? 
                                <>
                                <TypeDiet/>
                                </> 
                            : programName === "바디프로필 메이킹" ? 
                                <>
                                <BodyProfile/>
                                </> 
                            : programName === "청소년 성장" ? 
                                <>
                                <Child/>
                                </>
                            : programName === "통증관리" ? 
                                <>
                                <Pain/>
                                </> 
                            : programName === "직장인 일자목 + 허리 교정" && 
                                <>
                                <Worker/>
                                </> 
                            }
                        </div>
                    </div>
                </div>
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
}

export default ProgramDetail;