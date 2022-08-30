import React from 'react';
import Contact from '../components/Contact';
import Slider from '../components/Slider';
import Video from '../components/Video';
import ViewMap from '../components/ViewMap';

import styled from "styled-components"


const MiddleContents = () => {
    return(
        <>
        
        <div id="1" name="1" className='content'>
            <Video/>
        </div>
        <div id="2" name="2" className='content'>
            <Slider/>
        </div>
        <div id="3" name="3" className='content'>
            <ViewMap/>
        </div>
        <div id="4" name="4" className='content'>
            <Contact/>
        </div>
        </>
    )
}

 export default MiddleContents;