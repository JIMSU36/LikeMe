import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentSideDot from '../components/Dot/ContentSideDot';
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import ProgramContents from '../components/Content/ProgramContents';


const Program = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>  
                <ProgramContents/>      
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
};

export default Program;