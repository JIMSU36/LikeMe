import React, {useState} from "react";

import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
    Label,
    Button,
  } from "reactstrap";

const Slider = () => {
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
                <div className="slider1 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">오리엔테이션 프로그램 체험</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12 ">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
                                신청
                            </Button>
                        </div>
                        
                    </div>
                </div>
                <div className="slider2 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">8가지 비만유형에 따른 다이어트</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider3 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">바디프로필 메이킹</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider4 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">청소년 성장 + 자세 관리</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider5 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">통증 관리</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
                                더보기
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="slider6 h-[100vh]">
                    <div className="absolute top-[50%] -translate-y-2/4 translate-x-[95%] z-[99] p-12 text-left text-white w-1/2">
                        <div className="flex flex-col">
                            <Label className="text-3xl font-bold">직장인 일자목 + 허리 교정</Label>
                            <hr className="w-1/2 mt-4 mb-12"/>
                            <span className="mt-12">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] my-auto">
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