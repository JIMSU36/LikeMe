import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/main_logo.png';
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import {
    Label,
} from "reactstrap";

const Footer = () => {
    return(
        <>
        <div className="h-[20rem] p-6  bg-[#f0f0f0]">
            <div className="w-[65%] m-auto">
                <div className="p-0 m-0 w-[10%] m-4 ml-4 cursor-pointer">
                    <Link to="/">
                        <img className="object-cover" alt="main_logo" src={mainLogo} />
                    </Link>
                </div>
                <div className="ml-4 cursor-pointer text-left">
                    <Label className="text-xl">라이크미PT&Pilates 전문센터</Label>
                </div>
                <div className="flex flex-col text-left ml-4 mt-6 text-sm text-gray-500">
                    <span>상호명 : 라이크미PT&Pilates 전문센터 | 대표 : 김택규 | 사업자등록번호 : 192-50-00639 | 통신판매번호 : 2021-서울강서-3966</span>
                    <span>주소 : 서울시 강서구 공항대로 168, 2층</span>
                </div>
                <div className="flex space-x-4 ml-4 mt-6">
                    <Link to="/">
                        <AiOutlineInstagram size={30} color="gray" className="h-16 leading-[64px]"/>
                    </Link>
                    <Link to="/">
                        <RiKakaoTalkFill size={30} color="gray" className="h-16 leading-[64px]"/>
                    </Link>
                    <Link to="/">
                        <AiFillYoutube size={30} color="gray" className="h-16 leading-[64px]"/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer