import React from 'react';
import Contact from './Contact';
import Slider from './Slider';
import Video from './Video';
import ViewMap from './ViewMap';


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