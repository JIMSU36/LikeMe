import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentSideDot from '../components/Dot/ContentSideDot';
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import StudioContents from '../components/Content/StudioContents';

const Studio = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>  
                <StudioContents/>      
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
};

export default Studio;