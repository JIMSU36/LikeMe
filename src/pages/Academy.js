import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentSideDot from '../components/Dot/ContentSideDot';
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import AcademyContents from '../components/Academy/AcademyContents';

const Academy = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>  
                <AcademyContents/>      
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
};

export default Academy;