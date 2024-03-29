import React, { lazy, Suspense } from 'react';
import {
    Label,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { useApplicationContext } from '../../Contexts/ListTabContext';

const instructorlist = import("./InstructorList");
const InstructorList = lazy(() => instructorlist);
const trainerlist = import("./TrainerList");
const TrainerList = lazy(() => trainerlist);

const AcademyContents = () => {
    const { tab } = useApplicationContext();
    const { setTab } = useApplicationContext();
    
    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh]  w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>아카데미</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={tab === "강사양성과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                            onClick={() => {
                                setTab("강사양성과정")
                            }}
                        >
                            강사양성과정
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={tab === "트레이너교육과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                            onClick={() => {
                                setTab("트레이너교육과정")
                            }}
                        >
                            트레이너교육과정
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='w-full h-full py-20 bg-white'>
                <Label className='font-bold text-4xl'>{tab}</Label>
                <div className='w-full h-full py-10'>
                    <Suspense fallback={<div></div>}>
                        {tab === "강사양성과정" ? (
                            <>
                                <InstructorList/>
                            </>
                        ) : tab === "트레이너교육과정" && (
                            <>
                                <TrainerList/>
                            </>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
        </>
    )
}

export default AcademyContents;