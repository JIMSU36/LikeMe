import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

//context
import {ResultContextProvider} from '../Contexts/ScrollNumContext';

//components
import Login from '../components/Auth/Login';
import ContentSideDot from '../components/Dot/ContentSideDot';

const LoginPage = () => {
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-colsd'>        
                <Login />
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
}

 export default LoginPage;