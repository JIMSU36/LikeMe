import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink,
    Input
} from "reactstrap";
import axios from "axios";
import { GrEdit, GrUpload, GrTrash } from "react-icons/gr";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileBase64 from "react-file-base64";

import ImageResize from "quill-image-resize-module-react";
import moment from "moment";
import { useApplicationContext } from "../Contexts/TabContext";
import useAxios from "../utils/useAxios";

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
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    const { tab } = useApplicationContext();
    const { setTab } = useApplicationContext();
    const [detailData, setDetailData] = useState("");

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [thumb, setThumb] = useState([]);
    
    useEffect(()=>{
        FetchData();
    },[])

    const FetchData = () => {
        if(parentPage.action === "edit"){
            if(parentPage.tab === "instructor"){
                return axios.get("http://127.0.0.1:8000/getInstructor/"+parentPage.data.id)
                .then((response)=>{
                    setDetailData(response.data);
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    thumb.push({
                        base64: response.data.decodeImg
                    });
                    setThumb(thumb);
                    console.log(thumb)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else if(parentPage.tab === "trainer"){
                return axios.get("http://127.0.0.1:8000/getTrainer/"+parentPage.data.id)
                .then((response)=>{
                    setDetailData(response.data);
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }

	const handleChange = (value) => {
		setTab(value);
        navigate("/Academy")
	};

    const addPost = () => {
        if(parentPage.parent === "Academy"){
            if(parentPage.tab === "instructor"){
                
                axios.post("http://127.0.0.1:8000/postInstructor/", {
                    title: title,
                    content: content,
                    img:thumb[0].base64,
                    created_at: moment().format('YYYY-MM-DD')
                })
                .then(function (response) {
                    navigate(-1);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("포스트 등록 오류")
                });
            }
            else if(parentPage.tab === "trainer"){
                axios.post("http://127.0.0.1:8000/postTrainer/", {
                    title: title,
                    content: content,
                    img:thumb[0].base64,
                    created_at: moment().format('YYYY-MM-DD')
                })
                .then(function (response) {
                    navigate(-1);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("포스트 등록 오류")
                });
            }
        }
    }

    const editPost = (id) => {
        if(parentPage.parent === "Academy"){
            if(parentPage.tab === "instructor"){
                axios.put("http://127.0.0.1:8000/putInstructor/"+id, {
                    title: title,
                    content: content,
                    img:thumb[0].base64,
                    updated_at: moment().format('YYYY-MM-DD')
                })
                .then(function (response) {
                    console.log(response)
                    navigate(-1);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("포스트 수정 오류")
                });
            }
            else if(parentPage.tab === "trainer"){
                axios.put("http://127.0.0.1:8000/putTrainer/"+id, {
                    title: title,
                    content: content,
                    img:thumb[0].base64,
                    updated_at: moment().format('YYYY-MM-DD')
                })
                .then(function (response) {
                    console.log(response)
                    navigate(-1);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("포스트 수정 오류")
                });
            }
            
        }
    }

    const getThumb = (files, index) => {
        thumb.push(files)
        setThumb(thumb);
        forceUpdate();
        console.log(thumb)
      };

    const deleteThumb = (index) => {
        if (window.confirm("정말로 삭제 하시겠습니까?")) {
            setThumb([]);
            forceUpdate();
            console.log(thumb)
        }
    };


    return(
        <>
        <div id="1" name="1" className='content'>
            <div className='h-[1px] bg-transparent'></div>
        </div>
        <div id="5" name="5" className='content'>
            <div className='banner h-[40vh]  w-full relative bg-gray-400'>
                <div className='h-auto w-full absolute top-[50%] translate-y-1/2'>
                    <Label className='w-full h-full m-auto text-center text-4xl text-white font-bold'>{parentPage.parentPageName}</Label>
                </div>
            </div>
            <div className='w-full h-full bg-white relative '>
                <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={tab === "강사양성과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                handleChange("강사양성과정")
                            }}
                        >
                            강사양성과정
                        </NavLink>
                    </NavItem>
                    <NavItem className='px-6 py-[2vh]'>
                        <NavLink 
                            className={tab === "트레이너교육과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-gray-400" : "cursor-pointer " }
                            onClick={() => {
                                handleChange("트레이너교육과정")
                            }}
                        >
                            트레이너교육과정
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="w-[80vw] min-h-[100vh] h-full m-auto">
                <div className="w-full">
                    <div className="pt-20 pb-10 text-left flex">
                            <GrEdit size={30} className="my-auto mr-4"/>
                            {parentPage.action === "edit" ? (
                                <>
                                <Label className="font-bold text-3xl">Edit Post From {parentPage.parent}</Label>
                                </>
                            ):(
                                <Label className="font-bold text-3xl">New Post From {parentPage.parent}</Label>
                            )}
                    </div>
                    <div className="w-full h-full">
                        <Input
                            className="w-full h-full rounded-lg h-[8vh] text-[30px] font-bold focus:outline-0"
                            placeholder="제목을 입력하세요"
                            defaultValue={detailData.content}
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <hr
                            className="w-[10vh] bg-black h-2 mb-4"
                        />
                    </div>
                    <div className="filebox my-6">
                        {thumb.length > 0 ? (
                            <>
                            <div className="text-left">
                                <Label className="font-bold text-xl">Thumbnail</Label>
                                <div className="flex max-h-[30vh]">
                                    <img
                                        className="thumb-img"
                                        src={thumb[0].base64}
                                        alt="thumb"
                                    />
                                    <GrTrash size={25} className="trash-icon absolute translate-y-2 translate-x-2 fill-slate-50 cursor-pointer" onClick={()=>{deleteThumb()}}/>
                                </div>
                                
                            </div>
                            </>
                        ) : (
                            <>
                            <FileBase64
                                id="file"
                                name="m_icon"
                                multiple={false}
                                accept="image/x-png,image/gif,image/jpeg"
                                onDone={(files) => getThumb(files)}
                            />

                            <div className="dropzone border-2 border-dashed h-[200px]">
                                <div className="w-[80vw] absolute translate-y-1/2">
                                    <GrUpload size={50} className="m-auto mb-4"/>
                                    <Label className="font-bold">Click To Upload Thumbnail.</Label>
                                </div>
                            </div>
                            </>
                        )}
                        
                    </div>
                    <div className="min-h-[50vh] h-full">
                        <ReactQuill
                            className="editor text-left"
                            defaultValue={detailData.content}
                            value={content}
                            onChange={(e)=>{
                                setContent(e);
                            }}
                            theme="snow" 
                            modules={modules}
                        />
                    </div>
                    <div className="flex justify-end my-4 space-x-2">
                        <Button className="bg-red-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{navigate(-1)}}>취소</Button>
                        {parentPage.action === "edit" ? (
                            <Button className="bg-green-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{editPost(detailData.id)}}>수정</Button>
                        ):(
                            <Button className="bg-green-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{addPost()}}>등록</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default EditorContents;