import React, { useState } from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import IconSub from '../components/IconSub';
import Menu1Content from '../components/Menu1Content';
import Menu2Content from '../components/Menu2Content';
import Slider from '../components/Slider';
import Video from '../components/Video';
import Footer from '../components/Footer';
import ViewMap from '../components/ViewMap';

import SideDot from '../components/SideDot';
import MiddleContents from '../components/MiddleContents';

import { ResultContextProvider } from '../Contexts/ScrollNumContext';

const MainPage = () => {
    const [num, setNum] = useState(1);
    const parentFunction = (x) => {
        setNum(x);
    };

    return(
        <ResultContextProvider>
            <Header scrollNum={num}/>
            <div className='w-full flex-cols'>        
                <MiddleContents />
                <SideDot parentFunction={parentFunction}/>
            </div>
            <Footer/>
        </ResultContextProvider>
    )
}

 export default MainPage;