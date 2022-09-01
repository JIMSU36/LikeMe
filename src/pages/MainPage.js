import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import MainSideDot from '../components/Dot/MainSideDot';
import MiddleContents from '../components/Content/MiddleContents';
import { ResultContextProvider } from '../Contexts/ScrollNumContext';


const MainPage = () => {
    return(
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>        
                <MiddleContents />
                <MainSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
    )
}

 export default MainPage;