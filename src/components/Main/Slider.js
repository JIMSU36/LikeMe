import React, {useState} from "react";

import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
    Label,
    Button,
  } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const navigate = useNavigate();
    
    const settings = {
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        nextArrow:<GrNext/>,
        prevArrow:<GrPrevious/>
      };
      
    return(
        <>
        <div className="w-full h-[100vh] m-auto">
            <Slide {...settings} className="slide-wrap m-auto h-full">
                <div className="slider1 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">오리엔테이션 프로그램 체험</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12 text-lg">
                                    <p>다이어트, 체형교정, 통증관리, 키성장, 체력관리의 목적에 따라</p>
                                    <p>나에게 맞는 운동과 종류를 찾아드립니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">오리엔테이션</Label>
                                <Label className="slide-label text-3xl font-bold font-kotra">프로그램 체험</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12">
                                    <p>다이어트, 체형교정, 통증관리, 키성장,</p>
                                    <p>체력관리의 목적에 따라</p>
                                    <p>나에게 맞는 운동 종류를 찾아드립니다.</p>
                                </span>
                            </div>
                            
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    window.open('https://naver.me/FzHyeLd7', '_blank')
                                }}
                            >
                                예약하기
                            </Button>
                        </div>
                        
                    </div>
                </div>
                <div className="slider2 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">8가지 비만유형에 따른 다이어트</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12 text-lg">
                                    <p>주먹구구식의 몸만 힘들게 하는 운동이 아닌</p>
                                    <p>과학적 근거를 기반으로 8가지 유형의 원인 결과 시스템에 입각한 다이어트 프로그램을 맞춤 설계합니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">8가지 비만유형에</Label>
                                <Label className="slide-label text-3xl font-bold font-kotra">따른 다이어트</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12">
                                    <p>주먹구구식의</p>
                                    <p>몸만 힘들게 하는 운동이 아닌</p>
                                    <p>과학적 근거를 기반으로</p>
                                    <p>8가지 유형의 원인 결과 시스템에 입각</p>
                                    <p>다이어트 프로그램을 맞춤 설계합니다.</p>
                                </span>
                            </div>
                            
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    navigate("Program/8가지 비만유형에 따른 다이어트", {
                                        state:{
                                            program:"8가지 비만유형에 따른 다이어트",
                                            parent:"프로그램"
                                        }
                                    })
                                }}
                            >
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider3 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">바디프로필 메이킹</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12 text-lg">
                                    <p>개인체형 분석으로 장점은 부각, 단점은 완벽 커버해드리고,</p>
                                    <p>부위별 휴식시간을 고려한 최적의 근육을 만드는 방법을 배우는 프로그램입니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">바디프로필</Label>
                                <Label className="slide-label text-3xl font-bold font-kotra">메이킹</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12">
                                    <p>개인체형 분석으로</p>
                                    <p>장점은 부각, 단점은 완벽 커버,</p>
                                    <p>부위별 휴식시간을 고려한</p>
                                    <p>최적의 근육을 만드는 방법을</p>
                                    <p>배우는 프로그램입니다.</p>
                                </span>
                            </div>
                            
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    navigate("Program/바디프로필 메이킹", {
                                        state:{
                                            program:"바디프로필 메이킹",
                                            parent:"프로그램"
                                        }
                                    })
                                }}
                            >
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider4 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">청소년 성장 + 자세 관리</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text text-lg">
                                    <p>성장기때 잘 잡아줘야 하는 오다리, 엑스다리, 평발, 배내미는 전반적인 척추자세를 교정하고,</p>
                                    <p>체력, 집중력이 저하되는 아동과 청소년을 위한 프로그램입니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">청소년</Label>
                                <Label className="slide-label text-3xl font-bold font-kotra">성장 + 자세 관리</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text ">
                                    <p>성장기때 잘 잡아줘야 하는</p> 
                                    <p>오다리, 엑스다리, 평발, 전반적인 척추자세를 교정하고,</p>
                                    <p>체력, 집중력이 저하되는</p> 
                                    <p>아동과 청소년을 위한 프로그램입니다.</p>
                                </span>
                            </div>
                            
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    navigate("Program/청소년 성장", {
                                        state:{
                                            program:"청소년 성장",
                                            parent:"프로그램"
                                        }
                                    })
                                }}
                            >
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider5 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <Label className="slide-label text-3xl font-bold font-kotra">통증 관리</Label>
                            <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                            
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <span className="slide-text my-12 text-lg">
                                    <p>검사해도 안나오고 여기저기가 아픈 분들, 통증분류와 원인별로 나눠</p>
                                    <p>나에게 맞는 스트레칭과근력, 밸런스 운동으로케어받을 수 있는 프로그램입니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <span className="slide-text my-12">
                                    <p>검사해도 안나오고</p>
                                    <p>여기저기가 아픈 분들,</p>
                                    <p>통증분류와 원인별로 나눠</p>
                                    <p>나에게 맞는 스트레칭과</p>
                                    <p>근력, 밸런스 운동으로</p>
                                    <p>케어받을 수 있는 프로그램입니다.</p>
                                </span>
                            </div>
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    navigate("Program/통증관리", {
                                        state:{
                                            program:"통증관리",
                                            parent:"프로그램"
                                        }
                                    })
                                }}
                            >
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider6 mobile-slider h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 md:translate-x-[80%] z-[99] p-12 text-left text-white md:w-1/2">
                        <div className="flex flex-col">
                            <div className="md:block hidden">
                                {/* pc 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">직장인 일자목 + 허리 교정</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12 text-lg">
                                    <p>병원가니 일 좀 쉬라는 처방만 받고, 누적된 피로감으로 남은건 일자목과 일자허리이신 분들을 위한</p>
                                    <p>내 몸을 지킬 수 있는 자세교정 프로그램입니다.</p>
                                </span>
                            </div>
                            <div className="md:hidden block flex flex-col">
                                {/* 모바일 화면 */}
                                <Label className="slide-label text-3xl font-bold font-kotra">직장인</Label>
                                <Label className="slide-label text-3xl font-bold font-kotra">일자목 + 허리 교정</Label>
                                <hr className="w-1/2 mt-4 mb-12 border-2 border-white"/>
                                <span className="slide-text my-12">
                                    <p>병원가니</p>
                                    <p>일 좀 쉬라는 처방만 받고,</p>
                                    <p>누적된 피로감으로 남은건</p>
                                    <p>일자목과 일자허리이신 분들을 위한</p>
                                    <p>내 몸을 지킬 수 있는</p>
                                    <p>자세교정 프로그램입니다.</p>
                                </span>
                            </div>
                            
                            <Button 
                                className="mt-12 bg-white hover:bg-white/[0.6] hover:text-black rounded-lg font-bold text-[#93AEF9] md:w-[10vw] w-[40%] h-[5vh] my-auto"
                                onClick={()=>{
                                    navigate("Program/직장인 일자목 + 허리 교정", {
                                        state:{
                                            program:"직장인 일자목 + 허리 교정",
                                            parent:"프로그램"
                                        }
                                    })
                                }}
                            >
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
        </>
    )
}

export default Slider;