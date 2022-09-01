import React, { useState } from "react"
import { Link } from "react-scroll"
import { BsDot } from "react-icons/bs";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import { useResultContext } from "../../Contexts/ScrollNumContext";

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
    
    <div className="relative z-[9999999]">
        <div className="fixed w-[3%] inset-y-1/2 right-0">
            <Link activeClass="active" className="1 cursor-pointer" to="1" spy={true} smooth={true} onSetActive={handleSetActive}>
                <BsDot color={scrollNum == 1 ? "white" : "black"} size={30}/>
            </Link>
            <Link activeClass="active" className="2 cursor-pointer" to="2" spy={true} smooth={true} onSetActive={handleSetActive}>
                <BsDot color={scrollNum == 1 ? "white" : "black"} size={30}/>
            </Link>
            <Link activeClass="active" className="3 cursor-pointer" to="3" spy={true} smooth={true} onSetActive={handleSetActive}>
                <BsDot color={scrollNum == 1 ? "white" : "black"} size={30}/>
            </Link>
            <Link activeClass="active" className="4 cursor-pointer" to="4" spy={true} smooth={true} onSetActive={handleSetActive}>
                <BsDot color={scrollNum == 1 ? "white" : "black"} size={30}/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default MainSideDot;