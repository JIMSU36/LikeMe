import React, { useState } from "react"
import { Link } from "react-scroll"
import { BsDot } from "react-icons/bs";
import { TbCircleDot } from "react-icons/tb";
import { useResultContext } from "../../Contexts/ScrollNumContext";
import { Label } from "reactstrap";

const MainSideDot = () => {
    const { setScrollNum } = useResultContext();
    const { scrollNum } = useResultContext();

    const handleSetActive = to => {
        setScrollNum(to);
        // parentFunction(rollNum);

    };

    // console.log(rollNum)
  return (
    <>
    
    <div className="relative z-[9999999] hidden md:block">
        <div className="fixed w-[10%] inset-y-1/2 right-0">
            <Link activeClass="active" className="1 grid grid-cols-2 text-left" to="1" spy={true} smooth={true} onSetActive={handleSetActive}>
                <Label className={scrollNum == 1 || scrollNum == 2 ? "text-white font-bold cursor-pointer" : scrollNum == 4 ? "text-[#93AEF9] font-bold cursor-pointer" : "text-black font-bold cursor-pointer"}>Main</Label>
                {scrollNum == 1 ? (
                    <TbCircleDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                ) : (
                    <BsDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                )}
            </Link>
            <Link activeClass="active" className="2 grid grid-cols-2 text-left" to="2" spy={true} smooth={true} onSetActive={handleSetActive}>
                <Label className={scrollNum == 1 || scrollNum == 2 ? "text-white font-bold cursor-pointer" : scrollNum == 4 ? "text-[#93AEF9] font-bold cursor-pointer" : "text-black font-bold cursor-pointer"}>Program</Label>
                {scrollNum == 2 ? (
                    <TbCircleDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                ) : (
                    <BsDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                )}
            </Link>
            <Link activeClass="active" className="3 grid grid-cols-2 text-left" to="3" spy={true} smooth={true} onSetActive={handleSetActive}>
                <Label className={scrollNum == 1 || scrollNum == 2 ? "text-white font-bold cursor-pointer" : scrollNum == 4 ? "text-[#93AEF9] font-bold cursor-pointer" : "text-black font-bold cursor-pointer"}>Branch</Label>
                {scrollNum == 3 ? (
                    <TbCircleDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                ) : (
                    <BsDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                )}
            </Link>
            <Link activeClass="active" className="4 grid grid-cols-2 text-left" to="4" spy={true} smooth={true} onSetActive={handleSetActive}>
                <Label className={scrollNum == 1 || scrollNum == 2 ? "text-white font-bold cursor-pointer" : scrollNum == 4 ? "text-[#93AEF9] font-bold cursor-pointer" : "text-black font-bold cursor-pointer"}>Contact</Label>
                {scrollNum == 4 ? (
                    <TbCircleDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                ) : (
                    <BsDot color={scrollNum == 1 || scrollNum == 2 ? "white" : scrollNum == 4 ? "#93AEF9" : "black"} size={30}/>
                )}
            </Link>
        </div>
    </div>
    </>
  )
}

export default MainSideDot;