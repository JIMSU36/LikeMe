import React, { useEffect, useState } from 'react';
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import Company from './Company';
import CopCompany from './CopCompany';
import Instructor from './Instructor';


const LiKeMeContents = () => {
    const [selectTab, setSelectTab] = useState("회사소개");

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh] w-full relative bg-gray-400'>
                <div className=' h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>라이크미</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='md:px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={selectTab === "회사소개" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                setSelectTab("회사소개")
                            }}
                        >
                            회사소개
                        </NavLink>
                    </NavItem>
                    <NavItem className='md:px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "강사소개" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                setSelectTab("강사소개")
                            }}
                        >
                            강사소개
                        </NavLink>
                    </NavItem>
                    <NavItem className='md:px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "협력업체" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                setSelectTab("협력업체")
                            }}
                        >
                            협력업체
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='w-full h-full py-20 bg-white'>
                <Label className='font-bold text-4xl'>{selectTab}</Label>
                <div className='w-full h-full py-20'>
                    {selectTab === "회사소개" ? (
                        <>
                        <Company/>
                        </>
                    ) : selectTab === "강사소개" ? (
                        <>
                        <Instructor/>
                        </>
                    ) : selectTab === "협력업체" && (
                        <>
                        <CopCompany/>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

 export default LiKeMeContents;