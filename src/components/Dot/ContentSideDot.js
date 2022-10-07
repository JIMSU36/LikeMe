import React from "react"
import { Link } from "react-scroll"

import { useResultContext } from "../../Contexts/ScrollNumContext";

const ContentSideDot = () => {
    const { setScrollNum } = useResultContext();

    const handleSetActive = to => {
        setScrollNum(to);
    };

  return (
    <>
    
    <div className="relative z-[9999999]">
        <div className="fixed w-[3%] inset-y-1/2 right-0">
            <Link activeClass="active" className="1 cursor-pointer" to="1" spy={true} smooth={true} onSetActive={handleSetActive}>
            </Link>
            <Link activeClass="active" className="5 cursor-pointer" to="5" spy={true} smooth={true} onSetActive={handleSetActive}>
            </Link>
        </div>
    </div>
    </>
  )
}

export default ContentSideDot;