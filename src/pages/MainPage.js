import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

//context
import {ResultContextProvider} from '../Contexts/ScrollNumContext';

//components
import MainSideDot from '../components/Dot/MainSideDot';
import MiddleContents from '../components/Main/MiddleContents';

const MainPage = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>        
                <MiddleContents />
                <MainSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
}

 export default MainPage;