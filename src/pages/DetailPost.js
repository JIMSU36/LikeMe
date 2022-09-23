import React from "react";
import ContentSideDot from '../components/Dot/ContentSideDot';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import { useLocation } from "react-router-dom";
import DetailContents from "../components/DetailContents";

const DetailPost = () => {
    const location = useLocation();
    return(
        <><ResultContextProvider>
            <Header/>
            <div className='w-full flex-col'>  
                <DetailContents data={location.state}/>
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
}

export default DetailPost