import React from "react";
import ContentSideDot from '../components/Dot/ContentSideDot';
import EditorContents from "../components/EditorContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResultContextProvider } from '../Contexts/ScrollNumContext';
import { useLocation } from "react-router-dom";

const AddNewPost = () => {
    const location = useLocation();
    return(
        <>
        <ResultContextProvider>
            <Header/>
            <div className='w-full flex-col'>  
                <EditorContents parentPage={location.state}/>
                <ContentSideDot/>
            </div>
            <Footer/>
        </ResultContextProvider>
        </>
    )
}

export default AddNewPost;