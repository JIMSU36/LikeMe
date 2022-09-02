import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/LOGO.png';
import mainWhiteLogo from '../assets/images/logo_white.png';
import Select from 'react-select'
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate  } from "react-router-dom";
import { useResultContext } from "../Contexts/ScrollNumContext";
import ShowModal from "./ShowModal";


const MainHeader = (props) =>{
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const navigate = useNavigate(); 

    const {scrollNum} = useResultContext();
    const [selectPlace, setSelectPlace] = useState();
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const handleLinkToTab = (path) => {
        navigate('/'+path)
    }

    const places = [
        { value: '마곡역점', label: '마곡역점', tel: '02-2666-0191', address:'서울 강서구 공항대로 168 스타벅스 건물 2층', open: "평일 06:00 - 23:00  토요일 10:00 - 18:00", lat:37.559249, lng:126.826098},
        { value: '우장산역점', label: '우장산역점', tel: '00-0000-0000', address:'address input' },
    ]
    
    
    return(
        <>
        <ShowModal open={showModal} close={closeModal} data={selectPlace}/>
        <div
            data-text-content="true"
            className={(scrollNum == 1 ? "basic-menu text-white" : scrollNum == 5 ? "basic-menu bg-black/[0.4] text-white border-none" : "white-menu bg-white") +" !z-[99999] fixed border-b border-white inset-x-0 top-0 m-auto grid text-base text-lg whitespace-pre-wrap break-all w-full h-[6rem]"}
        >
            <div className="flex w-[90%] m-auto">
                <div className="p-0 m-0 w-[10%] h-16 m-4 ml-4cursor-pointer">
                    <div className="cursor-pointer" onClick={() => handleLinkToTab("")}>
                        <img className="object-cover h-16" alt="main_logo" src={scrollNum == 1 || scrollNum == 5 ? mainWhiteLogo : mainLogo } />
                    </div>
                </div>
                <div className={"flex m-auto ml-auto mr-4 place-content-center w-[80%] h-16 font-semibold"}>
                    <div className="cursor-pointer" onClick={() => handleLinkToTab("LikeMe")}>
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>라이크미</span>
                        </div>
                    </div>
                    <div>
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>프로그램</span>
                        </div>
                    </div>
                    <div>
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>아카데미</span>
                        </div>
                    </div>
                    <div>
                        <div className="mr-12 leading-[64px] cursor-pointer">
                            <span>스튜디오</span>
                        </div>
                    </div>
                    
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