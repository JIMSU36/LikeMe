import React, { useEffect, useState } from 'react';
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const ProgramContents = () => {
    const [selectTab, setSelectTab] = useState("오리엔테이션 체험");

    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='h-[30vh] w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>프로그램</Label>
                </div>
            </div>
            <div className='w-full min-h-[100vh] bg-white relative '>
            </div>
        </div>
        </>
    )
}

 export default ProgramContents;