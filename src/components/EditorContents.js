import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Label,
    Button,
} from "reactstrap";
import { GrEdit } from "react-icons/gr";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import ImageResize from "quill-image-resize-module-react";
Quill.register("modules/imageResize", ImageResize);

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    ["link", "image", "video"],
    [{ 'header': 1 }, { 'header': 2 }, { 'header': 3 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         
]; 
const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
};

const EditorContents = ({parentPage}) => {
    const navigate = useNavigate();
    const [content, setContent] = useState();


    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='h-[30vh] w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>{parentPage.parentPageName}</Label>
                </div>
            </div>
            <div className="w-[80vw] min-h-[100vh] h-full m-auto pb-20">
                <div className="w-full">
                    <div className="pt-20 pb-10 text-left flex">
                            <GrEdit size={30} className="my-auto mx-4"/>
                            <Label className="font-bold text-3xl">New Post From {parentPage.parent}</Label>
                    </div>
                    <div className="min-h-[50vh]">
                        <ReactQuill
                            className="editor text-left"
                            onChange={(e)=>{
                                setContent(e);
                            }}
                            theme="snow" 
                            modules={modules}
                        ></ReactQuill>
                    </div>
                    <div className="flex justify-end my-4 space-x-2">
                        <Button className="bg-red-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{navigate(-1)}}>취소</Button>
                        <Button className="bg-green-500 font-bold text-white py-2 px-5 rounded-lg">등록</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditorContents