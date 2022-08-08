import React from "react";
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/LOGO.png';


const Header = () =>{
    return(
        <>
        <div
            data-text-content="true"
            className="m-auto grid text-base text-lg whitespace-pre-wrap break-all w-full h-[6em] shadow-[0_2px_3px_2px_rgba(0,0,0,0.1)]"
        >
            <div className="flex w-[90%] m-auto">
                <div className="p-0 m-0 w-1/6 h-16 m-4 ml-4 mt-6 cursor-pointer">
                    <Link to="/">
                        <img className="object-cover h-16" alt="main_logo" src={mainLogo} />
                    </Link>
                </div>
                <div className="my-auto flex ml-auto mr-4 ">
                    <div className="mr-32">
                       <span>홈</span>
                    </div>
                    <div className="mr-32">
                       <span>menu 1</span>
                    </div>
                    <div className="mr-32">
                       <span>menu 2</span>
                    </div>
                    <div className="mr-8">
                       <span>menu 3</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;