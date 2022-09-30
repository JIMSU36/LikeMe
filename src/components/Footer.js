import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/main_logo.png';
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import {
    Label,
} from "reactstrap";
import AuthContext from '../Contexts/AuthContext';

const Footer = () => {
    const { user, logoutUser } = useContext(AuthContext);
    
    return(
        <>
        <div className="h-[20rem] p-6 bg-[#f0f0f0]">
            <div className="md:w-[65%] w-[100%] m-auto">
                <div className="p-0 m-0 md:w-[10%] w-[20%] m-4 ml-4 cursor-pointer">
                    <Link to="/">
                        <img className="object-cover" alt="main_logo" src={mainLogo} />
                    </Link>
                </div>
                <div className="ml-4 cursor-pointer text-left">
                    <Label className="md:text-xl text-base">라이크미PT&Pilates 전문센터</Label>
                </div>
                <div className="flex flex-col text-left ml-4 mt-6 text-sm text-gray-500 md:block hidden">
                    <div className=''>
                        <span>상호명 : 라이크미PT&Pilates 전문센터 | </span> 
                        <Link to={user ? "" : "/adminLogin"} className={user ? "cursor-default" : "cursor-pointer"}>
                            <span>대표 : 김택규</span>
                        </Link>
                        <span> | 사업자등록번호 : 192-50-00639 | 통신판매번호 : 2021-서울강서-3966</span>
                    </div>
                    <span>주소 : 서울시 강서구 공항대로 168, 2층</span>
                </div>

                {/* 모바일 푸터 정보 */}
                <div className="flex flex-col text-left ml-4 mt-6 text-sm text-gray-500 md:hidden block">
                    <div className='flex flex-col'>
                        <span>상호명 : 라이크미PT&Pilates 전문센터</span> 
                        <Link to={user ? "" : "/adminLogin"} className={user ? "cursor-default" : "cursor-pointer"}>
                            <span>대표 : 김택규</span>
                        </Link>
                        <span>사업자등록번호 : 192-50-00639</span>
                        <span>통신판매번호 : 2021-서울강서-3966</span>
                        <span>주소 : 서울시 강서구 공항대로 168, 2층</span>
                    </div>
                </div>

                <div className="flex space-x-4 ml-4 mt-6">
                    <a href="https://instagram.com/likeme_pt_gym?igshid=YmMyMTA2M2Y=" target="_blank">
                        <AiOutlineInstagram size={30} color="gray" className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://pf.kakao.com/_xfxjxgTs" target="_blank">
                        <RiKakaoTalkFill size={30} color="gray" className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://youtube.com/channel/UCqmxSrPFHsoyVkKmorpx62w" target="_blank">
                        <AiFillYoutube size={30} color="gray" className="h-16 leading-[64px]"/>
                    </a>
                    <a href="https://talk.naver.com/ct/w4pont?frm=mnmb&frm=nmb_detail" target="_blank">
                        <SiNaver size={25} color="gray" className="h-16 leading-[64px]"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer