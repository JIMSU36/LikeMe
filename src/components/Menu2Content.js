import React from "react";

import {
    Label,
    Button,
} from "reactstrap";

const Menu2Content = () => {
    return(
        <>
        <div className="w-full h-full bg-white">
            <div className="text-[50px] font-bold py-24">
                <Label>Content2 Title</Label>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 w-full h-full m-auto">
                <div className="bg-[#dce3f7] w-full h-[100vh] m-auto">
                    <div className="flex flex-col space-y-6 pt-[5rem] pb-[5rem]">
                        <Label className="text-[#625666] font-bold text-[40px]">Sub Title 1</Label>
                        <span className="w-[50%] m-auto font-medium text-[20px]">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                    </div>
                    <div className="mt-20 flex flex-col space-y-6">
                        <Label className="text-[#625666] font-bold text-[40px]">Sub Title 2</Label>
                        <Label className="text-[#625666] font-medium text-[40px]">Sub </Label>
                        <span className="w-[50%] m-auto font-medium text-[20px]">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                    </div>
                    <div className="mt-20 flex flex-col justify-center">
                        <Button className="text-[20px] font-bold text-white w-[15rem] h-[3rem] m-auto bg-[#625666]">Learn More</Button>
                    </div>
                </div>
                <div className="bg-[#f0f0f0] w-full ">
                    <Label className="font-bold leading-[100vh]">Img</Label>
                </div>

                <div className="bg-[#f0f0f0] w-full ">
                    <Label className="font-bold leading-[100vh]">Img</Label>
                </div>
                <div className="bg-[#dce3f7] w-full  h-[100vh]">
                    <div className="mt-32 flex flex-col space-y-6">
                            <Label className="text-[#625666] font-bold text-[40px]">Sub Title 2</Label>
                            <Label className="text-[#625666] font-medium text-[40px]">Sub </Label>
                            <span className="w-[50%] m-auto font-medium text-[20px]">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </span>
                            <span className="w-[50%] m-auto font-medium text-[20px]">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </span>
                        </div>
                        <div className="mt-32 flex flex-col justify-center">
                            <Button className="text-[20px] font-bold text-white w-[15rem] h-[3rem] m-auto bg-[#625666]">Learn More</Button>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu2Content;