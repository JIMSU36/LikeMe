import React from "react";
import icon1 from '../assets/images/dumbbell.png'
import icon2 from '../assets/images/exercise.png'
import icon3 from '../assets/images/self-improvement.png'
import icon4 from '../assets/images/warrior.png'

import {
    Label,
    Button,
} from "reactstrap";


const IconSub = () => {
    return(
        <>
        <div className="p-12 grid grid-cols-4 space-x-12 w-full h-[25rem] m-auto bg-[#f0f0f0]">
            <div className="grid grid-cols-1 space-y-4">
                <div className="flex flex-col m-auto">
                    <img className="w-[10rem] m-auto" alt="icon1" src={icon1} />
                    <Label className="text-xl m-auto font-bold mt-2">Lorem Ipsum is simply</Label>
                </div>
                <div className="w-[50%] m-auto">
                    <span className="text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex flex-col m-auto">
                    <img className="w-[10rem] m-auto" alt="icon1" src={icon2} />
                    <Label className="text-xl m-auto font-bold mt-2">Lorem Ipsum is simply</Label>
                </div>
                <div className="w-[50%] m-auto">
                    <span className="text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex flex-col m-auto">
                    <img className="w-[10rem] m-auto" alt="icon1" src={icon3} />
                    <Label className="text-xl m-auto font-bold mt-2">Lorem Ipsum is simply</Label>
                </div>
                <div className="w-[50%] m-auto">
                    <span className="text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex flex-col m-auto">
                    <img className="w-[10rem] m-auto" alt="icon1" src={icon4} />
                    <Label className="text-xl m-auto font-bold mt-2">Lorem Ipsum is simply</Label>
                </div>
                <div className="w-[50%] m-auto">
                    <span className="text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                </div>
            </div>
        </div>

        <div className="flex w-full h-full m-auto bg-white justify-center p-[10rem] space-x-12">
            <div className="w-[25rem] flex flex-col text-right pb-6">
                <Label className=" text-[#dce3f7] text-[60px] font-bold">Lorem Ipsum!</Label>
                <Label className=" text-[#dce3f7] text-[35px] ">Lorem Ipsum is simply</Label>

                <div className="mt-6 flex flex-col space-y-6">
                    <span>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </span>
                    <span>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>

                <div className="w-[15rem] h-[15rem] bg-[#f0f0f0] ml-auto mt-6 text-center rounded-lg">
                    <Label className="font-bold leading-[15rem]">Logo Img</Label>
                </div>
            </div>

            <div className="w-[40rem] bg-[#A9BAEB]/[0.8] flex items-center">
                <div className="w-full h-[60%] bg-[#f0f0f0]">
                    <Label className="font-bold leading-[25rem]">Img</Label>
                </div>
            </div>
        </div>
        </>
    )
}

export default IconSub;