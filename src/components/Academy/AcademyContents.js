import React, { useEffect, useState } from 'react';
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import InstructorList from './InstructorList';
import TrainerList from './TrainerList';

const AcademyContents = () => {
    const [selectTab, setSelectTab] = useState("강사양성과정");

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='h-[30vh] w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>아카데미</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={selectTab === "강사양성과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("강사양성과정")
                            }}
                        >
                            강사양성과정
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={selectTab === "트레이너교육과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("트레이너교육과정")
                            }}
                        >
                            트레이너교육과정
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='w-full h-full py-20 bg-white'>
                <Label className='font-bold text-4xl'>{selectTab}</Label>
                <div className='w-full h-full py-20'>
                    {selectTab === "강사양성과정" ? (
                        <>
                        <InstructorList/>
                        </>
                    ) : selectTab === "트레이너교육과정" && (
                        <>
                        <TrainerList/>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default AcademyContents;