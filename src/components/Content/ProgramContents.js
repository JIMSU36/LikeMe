import React, { useEffect, useState } from 'react';
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const ProgramContents = () => {
    const [selectTab, setSelectTab] = useState("오리엔테이션 체험");

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='h-[30vh] w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>프로그램</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={selectTab === "오리엔테이션 체험" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("오리엔테이션 체험")
                            }}
                        >
                            오리엔테이션 체험
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "비만유형에 따른 다이어트" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("비만유형에 따른 다이어트")
                            }}
                        >
                            비만유형에 따른 다이어트
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "바디프로필 메이킹" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("바디프로필 메이킹")
                            }}
                        >
                            바디프로필 메이킹
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "청소년 성장 + 자세 관리" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("청소년 성장 + 자세 관리")
                            }}
                        >
                            청소년 성장 + 자세 관리
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "통증 관리" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("통증 관리")
                            }}
                        >
                            통증 관리
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "직장인 일자목 + 허리 교정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("직장인 일자목 + 허리 교정")
                            }}
                        >
                            직장인 일자목 + 허리 교정
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='w-full h-full py-20 bg-white'>
                <Label className='font-bold text-4xl'>{selectTab}</Label>
                <div className='w-full h-full py-20'>
                    
                </div>
            </div>
        </div>
        </>
    )
}

 export default ProgramContents;