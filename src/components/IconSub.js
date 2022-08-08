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
        </>
    )
}

export default IconSub;