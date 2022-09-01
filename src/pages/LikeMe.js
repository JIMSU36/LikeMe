import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import LiKeMeContents from '../components/Content/LikeMeContents';
import ContentSideDot from '../components/Dot/ContentSideDot';

const LikeMe = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>        
                <LiKeMeContents />
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
    
};

export default LikeMe;