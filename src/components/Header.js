import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import mainLogo from '../assets/images/LOGO.png';
import mainWhiteLogo from '../assets/images/logo_white.png';
import Select from 'react-select'
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import { useResultContext } from "../Contexts/ScrollNumContext";

const MainHeader = () =>{
    const {scrollNum} = useResultContext();
    const options = [
        { value: '마곡역점', label: '마곡역점' },
        { value: '우장산역점', label: '우장산역점' },
    ]
    
    
    return(
        <>
        <div
            data-text-content="true"
            className={(scrollNum == 1 ? "basic-menu text-white" : scrollNum == 5 ? "basic-menu bg-black/[0.4] text-white" : "white-menu bg-white") +" !z-[99999] fixed border-b border-white inset-x-0 top-0 m-auto grid text-base text-lg whitespace-pre-wrap break-all w-full h-[6rem]"}
        >
            <div className="flex w-[90%] m-auto">
                <div className="p-0 m-0 w-[10%] h-16 m-4 ml-4cursor-pointer">
                    <Link to="/">
                        <img className="object-cover h-16" alt="main_logo" src={scrollNum == 1 || scrollNum == 5 ? mainWhiteLogo : mainLogo } />
                    </Link>
                </div>
                <div className={"flex m-auto ml-auto mr-4 place-content-center w-[80%] h-16 font-semibold"}>
                    <Link to="/LikeMe">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                        <span>라이크미</span>
                        </div>
                    </Link>
                    <Link to="/Program">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                        <span>프로그램</span>
                        </div>
                    </Link>
                    <Link to="/Academy">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                        <span>아카데미</span>
                        </div>
                    </Link>
                    <Link to="/Studio">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                        <span>스튜디오</span>
                        </div>
                    </Link>
                    
                    <div className="my-auto">
                        <Select 
                            className="place-select text-black"
                            placeholder='지점 선택' 
                            options={options}  
                            styles={{
                                // Fixes the overlapping problem of the component
                                menu: (options) => ({ ...options, zIndex: 99999 }),
                                control: (base, state) => ({ ...base,background: "none", borderColor: scrollNum != 1 && "white", cursor:"pointer", }),
                              }}
                        />
                    </div>
                </div>
                <div className="flex space-x-2 p-0 m-0 w-[10%] m-4 ml-4 cursor-pointer">
                    <Link to="/">
                        <AiOutlineInstagram size={30} className="h-16 leading-[64px]"/>
                    </Link>
                    <Link to="/">
                        <RiKakaoTalkFill size={30} className="h-16 leading-[64px]"/>
                    </Link>
                    <Link to="/">
                        <AiFillYoutube size={30} className="h-16 leading-[64px]"/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainHeader;