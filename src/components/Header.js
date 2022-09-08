import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from '../assets/images/main_logo.png';
import mainWhiteLogo from '../assets/images/logo_white.png';
import naverTalk from '../assets/images/naverTalkLogo.png';
import { useResultContext } from "../Contexts/ScrollNumContext";
import Select from 'react-select'
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import ShowModal from "./ShowModal";


const Header = () => {
    const {scrollNum} = useResultContext();
    const [selectPlace, setSelectPlace] = useState();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const places = [
        { value: '마곡역점', label: '마곡역점', tel: '02-2666-0191', address:'서울 강서구 공항대로 168 스타벅스 건물 2층', open: "평일 06:00 - 23:00  토요일 10:00 - 18:00", lat:37.559249, lng:126.826098},
        { value: '우장산역점', label: '우장산역점', tel: '00-0000-0000', address:'address input' },
    ]


    return(
        <>
        <ShowModal open={showModal} close={closeModal} data={selectPlace}/>
        <div
            data-text-content="true"
            className={(scrollNum == 1 ? "basic-menu text-white" : scrollNum == 5 ? "basic-menu bg-black/[0.4] text-white border-none" : "white-menu bg-white shadow-md") +" !z-[99999] fixed border-b border-white inset-x-0 top-0 m-auto grid text-base text-lg whitespace-pre-wrap break-all w-full h-[6rem]"}
        >
            <div className="flex w-[90%] m-auto">
                <div className="p-0 m-0 w-[10%] m-4 ml-4cursor-pointer">
                    <Link to ="/">
                        <img className="object-cover h-12" alt="main_logo" src={scrollNum == 1 || scrollNum == 5 ? mainWhiteLogo : mainLogo } />
                    </Link>
                </div>
                <div className={"flex m-auto ml-auto mr-4 place-content-center w-[80%] h-16 font-semibold"}>
                    <Link to ="/LikeMe">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>라이크미</span>
                        </div>
                    </Link>
                    <Link to ="/Program">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>프로그램</span>
                        </div>
                    </Link>
                    <Link to ="/Academy">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>아카데미</span>
                        </div>
                    </Link>
                    <Link to ="/Studio">
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>스튜디오</span>
                        </div>
                    </Link>
                    
                    <div className="my-auto">
                        <Select 
                            className="place-select text-black"
                            placeholder='지점 선택' 
                            options={places}  
                            value={places.find((op)=>{
                                return op.value === selectPlace;
                            })}
                            onChange={(e)=>{
                                setSelectPlace(e);
                                openModal();
                            }}
                            styles={{
                                // Fixes the overlapping problem of the component
                                menu: (options) => ({ ...options, zIndex: 99999 }),
                                control: (base, state) => ({ ...base,background: "none", borderColor: scrollNum != 1 && "white", cursor:"pointer", }),
                              }}
                        />
                    </div>
                </div>
                <div className="flex space-x-2 p-0 m-0 w-[10%] m-4 ml-4 cursor-pointer">
                    <a href="https://instagram.com/likeme_pt_gym?igshid=YmMyMTA2M2Y=" target="_blank">
                        <AiOutlineInstagram size={30} color={scrollNum == 1 || scrollNum == 5 ? "white" : "black"} className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://pf.kakao.com/_xfxjxgTs" target="_blank">
                        <RiKakaoTalkFill size={30} color={scrollNum == 1 || scrollNum == 5 ? "white" : "black"} className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://youtube.com/channel/UCqmxSrPFHsoyVkKmorpx62w" target="_blank">
                        <AiFillYoutube size={30} color={scrollNum == 1 || scrollNum == 5 ? "white" : "black"} className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://talk.naver.com/ct/w4pont?frm=mnmb&frm=nmb_detail" target="_blank">
                        <SiNaver size={25} color={scrollNum == 1 || scrollNum == 5 ? "white" : "black"} className="h-16 leading-[64px]"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
