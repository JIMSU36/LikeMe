import React, {useState} from "react";

import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      };
      
    return(
        <>
        <div className="w-full h-[85vh] m-auto">
            <Slide {...settings} className="slide-wrap m-auto ">
                <div className="slider1">
                    <div className="grid grid-col-1 z-[99] p-12 text-white bg-[#625666]/[0.8] w-[30vw] h-[55vh] mt-[7%] ml-[50%]">
                        <Label className="text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Label>
                        <span className="mt-12">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                        <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] m-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="slider2">
                    <div className="grid grid-col-1 z-[99] p-12 text-white bg-[#f5dbd7]/[0.8] w-[30vw] h-[55vh] mt-[7%] ml-[50%]">
                        <Label className="text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Label>
                        <span className="mt-12">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                        <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] m-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="slider3">
                    <div className="grid grid-col-1 z-[99] p-12 text-white bg-[#dce3f7]/[0.8] w-[30vw] h-[55vh] mt-[7%] ml-[50%]">
                        <Label className="text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Label>
                        <span className="mt-12">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                        <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] m-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="slider4">
                    <div className="grid grid-col-1 z-[99] p-12 text-white bg-[#f5e8ce]/[0.8] w-[30vw] h-[55vh] mt-[10%] ml-[50%]">
                        <Label className="text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Label>
                        <span className="mt-12">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </span>
                        <Button className="mt-12 border-4 font-bold w-[10vw] h-[5vh] m-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Slide>
        </div>
        </>
    )
}

export default Slider;