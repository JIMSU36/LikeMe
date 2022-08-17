import React from "react";

import {
    Label,
    Button,
} from "reactstrap";

const Menu1Content = () => {
    return(
        <>
        <div className="content1 w-full h-full bg-fixed m-auto">
            <div className="w-full h-full bg-[#A9BAEB]/[0.5]">
                <div className="w-full z-[99] absolute py-[5rem] px-[25rem] text-white">
                    <Label className="content1-label font-medium text-[60px] ">Content Title</Label>

                    <div className="flex space-x-12 p-12 justify-center">
                        <div className="w-[40rem] h-[30rem] bg-[#f0f0f0]">
                            <Label className="font-bold leading-[30rem] text-black">Img</Label>
                        </div>

                        <div className="flex flex-col space-y-6 w-[40rem] h-[30rem] text-left font-medium">
                            <Label className="text-[40px]">
                                Lorem Ipsum is simply
                            </Label>
                            <span>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </span>
                            <span>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                            <span>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-[40rem] h-full bg-[#A9BAEB] ml-[20rem]"/>
            </div>
        </div>
        <div className="w-full h-[25rem] grid grid-cols-5">
            <div className="border-2">
                <Label className="font-bold leading-[25rem]">Img</Label>
            </div>
            <div className="border-2">
                <Label className="font-bold leading-[25rem]">Img</Label>
            </div>
            <div className="border-2">
                <Label className="font-bold leading-[25rem]">Img</Label>
            </div>
            <div className="border-2">
                <Label className="font-bold leading-[25rem]">Img</Label>
            </div>
            <div className="border-2">
                <Label className="font-bold leading-[25rem]">Img</Label>
            </div>
        </div>
        </>
    )
}

export default Menu1Content;
