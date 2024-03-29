import React, { useState } from 'react';
import {
    Label,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import UserGalleryList from './UserGalleryList';

const StudioContents = () => {
    const [selectTab, setSelectTab] = useState("회원갤러리");
    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh] + w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold label-shadow'>스튜디오</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={selectTab === "회원갤러리" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                            onClick={() => {
                                setSelectTab("회원갤러리")
                            }}
                        >
                            회원갤러리
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='w-full h-full py-20 bg-white'>
                <Label className='font-bold text-4xl'>{selectTab}</Label>
                <div className='min-h-[100vh]'>
                    <UserGalleryList/>
                </div>
            </div>
        </div>
        </>
    )
}

export default StudioContents;