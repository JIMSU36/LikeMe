import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from '../assets/images/main_logo.png';
import mainWhiteLogo from '../assets/images/logo_white.png';
import naverTalk from '../assets/images/naverTalkLogo.png';
import { useResultContext } from "../Contexts/ScrollNumContext";
import Select from 'react-select'
import {AiOutlineInstagram, AiFillYoutube, AiOutlineMenu} from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import ShowModal from "./ShowModal";
import AuthContext from "../Contexts/AuthContext";
import classNames from "classnames";
import mogokImg from '../assets/images/magok.jpg'
import ujangsanImg from '../assets/images/ujangsan.jpg'
import { Button, Label } from "reactstrap";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const {scrollNum} = useResultContext();
    const [selectPlace, setSelectPlace] = useState();

    const [showModal, setShowModal] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const places = [
        { value: '마곡역점', label: '마곡역점', tel: '02-2666-0191', address:'서울 강서구 공항대로 168 스타벅스 건물 2층', dayOpen: "평일 06:00 - 23:00 ", weekOpen: "토요일 10:00 - 18:00", parking: "2시간 무료",img: mogokImg,  lat:37.559249, lng:126.826098},
        { value: '우장산역점', label: '우장산역점', tel: '0507-1461-0285', address:'서울 강서구 강서로45길 49-4 B1층 (내발산동, 태승훼미리아파트 5차)', dayOpen: "평일 06:00 - 24:00", weekOpen:"토요일 10:00 - 18:00", img: ujangsanImg, lat:37.547880, lng:126.832767 },
    ]
    
    return(
        <>
        <ShowModal open={showModal} close={closeModal} data={selectPlace}/>
        <div
            data-text-content="true"
            className={(scrollNum == 1 ? "md:basic-menu white-menu md:text-white text-black md:bg-transparent bg-white" : scrollNum == 5 ? "md:basic-menu white-menu md:bg-black/[0.4] bg-white md:text-white text-black border-none" : "white-menu bg-white shadow-md") +" !z-[99999] fixed border-b border-white inset-x-0 top-0 m-auto text-base text-lg whitespace-pre-wrap break-all w-full md:h-[6rem] h-[4rem]"}
        >
            {/* 일반 헤더 */}
            <div className="md:flex hidden w-[90%] m-auto">
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
                                control: (base, state) => ({
                                    ...base,
                                    background: "none", 
                                    borderColor: "white", 
                                    cursor:"pointer", 
                                    span:{
                                        background: scrollNum == 1 || scrollNum == 5 ? "white" : "black"
                                    },
                                    svg :{
                                        color: scrollNum == 1 || scrollNum == 5 ? "white" : "black"
                                    }
                                }),
                                placeholder:(base, state) => ({
                                    ...base,
                                    color: scrollNum == 1 || scrollNum == 5 ? "white" : "black"
                                }),
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
                <div className="flex space-x-2 p-0 m-0 w-[10%] m-4 ml-4">
                    {user && (
                        <>
                        <button 
                            onClick={logoutUser} 
                            className="font-bold cursor-pointer"
                        >
                            Logout
                        </button>
                        </>
                    )}
                </div>
            </div>

            {/* Hamburger Menu */}
            <div className="w-full h-[4rem] md:hidden block border-b-[2px]">
                <div className="flex">
                    <div className="p-0 m-0 w-20 h-6 m-4 cursor-pointer ">
                        <Link to ="/">
                            <img className="object-cover h-6" alt="main_logo" src={mainLogo} />
                        </Link>
                    </div>
                    <Button className="ml-auto m-4" onClick={()=>{setMenuToggle(!menuToggle)}}>
                        <AiOutlineMenu size={20} />
                    </Button>
                </div>
            </div>

            {/* Hamburger Menu Item */}
            <div
                className={classNames(
                    "md:hidden absolute text-center bg-white shadow-lg z-[999] w-60 right-0 top-[4rem] h-[60vh] overflow-y-auto",
                    { hidden: !menuToggle }
                )}
            >
                <div className="my-2 p-2 border-b text-left">
                    <Label className="ml-4 text-sm font-bold text-gray-400">Menu</Label>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <Link to ="/LikeMe">
                        <div className="font-bold cursor-pointer">
                            <span>라이크미</span>
                        </div>
                    </Link>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <Link to ="/Program">
                        <div className="font-bold cursor-pointer">
                            <span>프로그램</span>
                        </div>
                    </Link>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <Link to ="/Academy">
                        <div className="font-bold cursor-pointer">
                            <span>아카데미</span>
                        </div>
                    </Link>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <Link to ="/Studio">
                        <div className="font-bold cursor-pointer">
                            <span>스튜디오</span>
                        </div>
                    </Link>
                </div>

                <div className="my-2 p-2 border-b text-left text-black">
                    <Label className="ml-4 text-sm font-bold text-gray-400">SNS</Label>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <a href="https://instagram.com/likeme_pt_gym?igshid=YmMyMTA2M2Y=" target="_blank">
                        <div className="flex justify-center space-x-2">
                            <AiOutlineInstagram size={30} color={"black"} />
                            <Label className="my-auto w-[50%] text-left pl-2">Instagram</Label>
                        </div>
                    </a>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <a href="https://pf.kakao.com/_xfxjxgTs" target="_blank">
                        <div className="flex justify-center space-x-2">
                            <RiKakaoTalkFill size={30} color={"black"}/>
                            <Label className="my-auto w-[50%] text-left pl-2">KakaoTalk</Label>
                        </div>
                    </a>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <a href="https://youtube.com/channel/UCqmxSrPFHsoyVkKmorpx62w" target="_blank">
                        <div className="flex justify-center space-x-2">
                            <AiFillYoutube size={30} color={"black"}/>
                            <Label className="my-auto w-[50%] text-left pl-2">Youtube</Label>
                        </div>
                    </a>
                </div>
                <div className="my-2 p-2 border-b text-black">
                    <a href="https://talk.naver.com/ct/w4pont?frm=mnmb&frm=nmb_detail" target="_blank">
                        <div className="flex justify-center space-x-2">
                            <SiNaver size={25} color={"black"}/>
                            <Label className="my-auto w-[50%] text-left pl-2">Naver</Label>
                        </div>
                        
                    </a>
                </div>
                {user && (
                    <>
                        <div className="my-2 p-2 border-b text-left">
                            <Label className="ml-4 text-sm font-bold text-gray-400">Admin</Label>
                        </div>
                        <div className="my-2 p-2 text-black">
                            <Button 
                                onClick={logoutUser} 
                                className="font-bold cursor-pointer"
                            >
                                Logout
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Header;
