import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink,
    Input,
    Row,
} from "reactstrap";
import axios from "axios";
import { GrEdit, GrUpload, GrTrash } from "react-icons/gr";
import { BiX } from "react-icons/bi";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileBase64 from "react-file-base64";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import ImageResize from "quill-image-resize-module-react";
import moment from "moment";
import { useApplicationContext } from "../Contexts/ListTabContext";
import { useLikeMeTabContext } from "../Contexts/LikeMeTabContext";
import Config from "../config";

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

    //academy tab
    const { tab } = useApplicationContext();
    const { setTab } = useApplicationContext();

    //likeme tab
    const { ltab } = useLikeMeTabContext();
    const { setlTab } = useLikeMeTabContext();

    const [detailData, setDetailData] = useState("");

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [thumb, setThumb] = useState([]);

    //강사 추가
    const [name, setName] = useState("");
    const [qualification, setQualification] = useState([]);
    const [history, setHistory] = useState([]);
    const [color, setColor] = useColor("hex", "#000000");
    
    const addQuali = () => {
        qualification.push("")
        setQualification(qualification);
        forceUpdate();
    }

    const deleteQuali = (index) => {
        qualification.splice(index, 1);
        setQualification(qualification);
        forceUpdate();
    }

    const addHistory = () => {
        history.push("")
        setHistory(history);
        forceUpdate();
    }

    const deleteHistory = (index) => {
        history.splice(index, 1);
        setHistory(history);
        forceUpdate();
    }

    const renderQualiArr = () => {
        return (
            qualification.length !== 0 && 
            qualification.map((item, index)=>{
                return(
                    <Row key={"qualification-key"+index} className="mt-4 flex">
                        <Input
                            className="w-full h-full text-lg border-b font-bold focus:outline-0"
                            placeholder={"자격 "+(index+1)}
                            value={qualification[index]}
                            onChange={(e)=>{
                                let temp = qualification.splice(0, qualification.length);
                                temp[index] = e.target.value;
                                setQualification(temp);
                            }}
                        />
                        <Button
                            className="bg-red-500 rounded-sm ml-2 hover:bg-red-300"
                            onClick={()=>{
                                deleteQuali(index)
                            }}
                        >
                            <BiX color="white" size={20}/>
                        </Button>
                    </Row>
                )
            })
        )
    }

    const renderHistory = () => {
        return (
            history.length !== 0 &&
            history.map((item, index)=>{
                return(
                    <Row key={"history-key"+index} className="mt-4 flex">
                        <Input
                            className="w-full h-full text-lg border-b font-bold focus:outline-0"
                            placeholder={"경력 "+(index+1)}
                            value={history[index]}
                            onChange={(e)=>{
                                let temp = history.splice(0, history.length);
                                temp[index] = e.target.value;
                                setHistory(temp);
                            }}
                        />
                        <Button
                            className="bg-red-500 rounded-sm ml-2 hover:bg-red-300"
                            onClick={()=>{
                                deleteHistory(index)
                            }}
                        >
                            <BiX color="white" size={20}/>
                        </Button>
                    </Row>
                )
            })
        )
    }
    

    useEffect(()=>{
        FetchData();
    },[])


    const FetchData = () => {
        if(parentPage.action === "edit"){
            if(parentPage.tab === "instructor"){
                return axios.get(`${Config.restApi}/getInstructor/`+parentPage.data.id)
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
                return axios.get(`${Config.restApi}/getTrainer/`+parentPage.data.id)
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
            else if(parentPage.tab === "gallery"){
                return axios.get(`${Config.restApi}/getGallery/`+parentPage.data.id)
                .then((response)=>{
                    setDetailData(response.data);
                    setTitle(response.data.title);
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
            else if(parentPage.tab === "teachers"){
                return axios.get(`${Config.restApi}/getTrainerList/`+parentPage.data)
                .then((response)=>{
                    console.log(response.data)
                    setDetailData(response.data);
                    thumb.push({
                        base64: response.data.decodeImg
                    });
                    setThumb(thumb);
                    setName(response.data.trainer_name);
                    setQualification(response.data.qualification_arr);
                    setHistory(response.data.history_arr);
                    setColor(response.data.color_code);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }


	const handleChange = (value) => {
        if(parentPage.parent === "Academy"){
            setTab(value);
            navigate("/Academy");
        }
		else if(parentPage.parent === "LikeMe"){
            setlTab(value)
            navigate("/LikeMe");
        }
	};

    const addPost = () => {
        if(parentPage.parent === "Academy"){
            if(parentPage.tab === "instructor"){
                
                axios.post(`${Config.restApi}/postInstructor/`, {
                    title: title,
                    content: content,
                    img:thumb.length > 0 ? thumb[0].base64 : "",
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
                axios.post(`${Config.restApi}/postTrainer/`, {
                    title: title,
                    content: content,
                    img:thumb.length > 0 ? thumb[0].base64 : "",
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
        }else if(parentPage.parent === "Studio"){
            axios.post(`${Config.restApi}/postGallery/`, {
                title: title,
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
        }else if(parentPage.parent === "LikeMe"){
            if(parentPage.tab === "company"){
                axios.post(`${Config.restApi}/postCoCompany/`, {
                    img:thumb[0].base64,
                })
                .then(function (response) {
                    navigate(-1);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("포스트 등록 오류")
                });
            }else if(parentPage.tab === "teachers"){
                axios.post(`${Config.restApi}/postTrainerList/`, {
                    trainer_name: name,
                    img:thumb[0].base64,
                    trainer_history: JSON.stringify(history),
                    qualification: JSON.stringify(qualification),
                    color: JSON.stringify(color),
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
                axios.put(`${Config.restApi}/putInstructor/`+id, {
                    title: title,
                    content: content,
                    img:thumb.length > 0 ? thumb[0].base64 : "",
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
                axios.put(`${Config.restApi}/putTrainer/`+id, {
                    title: title,
                    content: content,
                    img:thumb.length > 0 ? thumb[0].base64 : "",
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
        else if(parentPage.parent === "Studio"){
            axios.put(`${Config.restApi}/putGallery/`+id, {
                title: title,
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
        else if(parentPage.parent === "LikeMe"){
            if(parentPage.tab === "teachers"){
                axios.put(`${Config.restApi}/putTrainerList/`+id, {
                    trainer_name: name,
                    img:thumb[0].base64,
                    trainer_history: JSON.stringify(history),
                    qualification: JSON.stringify(qualification),
                    color: JSON.stringify(color),
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

    const deletePost = (id) => {
        if (window.confirm("정말로 삭제 하시겠습니까?")) {
            axios.delete(`${Config.restApi}/deleteGallery/`+id)
            .then((response) => {
                navigate(-1);
                
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <Label className='label-shadow w-full h-full m-auto text-center text-4xl text-white font-bold'>{parentPage.parentPageName}</Label>
                </div>
            </div>
            {parentPage.parent === "Academy" ? (
                <div className='w-full h-full bg-white relative '>
                    <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                        <NavItem className='px-6 py-[2vh] h-full'>
                            <NavLink 
                                className={tab === "강사양성과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                                onClick={() => {
                                    handleChange("강사양성과정")
                                }}
                            >
                                강사양성과정
                            </NavLink>
                        </NavItem>
                        <NavItem className='px-6 py-[2vh]'>
                            <NavLink 
                                className={tab === "트레이너교육과정" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                                onClick={() => {
                                    handleChange("트레이너교육과정")
                                }}
                            >
                                트레이너교육과정
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ) : parentPage.parent === "Studio" ? (
                <div className='w-full h-full bg-white relative '>
                    <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                        <NavItem className='px-6 py-[2vh] h-full'>
                            <NavLink 
                                className={parentPage.tab === "gallery" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer " }
                                onClick={() => {
                                    navigate("/Studio")
                                }}
                            >
                                회원갤러리
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ) : parentPage.parent === "LikeMe" && (
                <div className='w-full h-full bg-white relative '>
                    <Nav className='w-full h-full flex space-x-6 text-lg justify-center border-b-2'>
                    <NavItem className='md:px-6 py-[2vh] h-full'>
                        <NavLink 
                            className={ltab === "회사소개" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                handleChange("회사소개")
                            }}
                        >
                            회사소개
                        </NavLink>
                    </NavItem>
                    <NavItem className='md:px-6 py-[2vh]'>
                        <NavLink 
                            className={ltab === "강사소개" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                handleChange("강사소개")
                            }}
                        >
                            강사소개
                        </NavLink>
                    </NavItem>
                    <NavItem className='md:px-6 py-[2vh]'>
                        <NavLink 
                            className={ltab === "협력업체" ? "active cursor-pointer font-bold py-[2vh] border-b-4 border-[#93AEF9]" : "cursor-pointer "}
                            onClick={() => {
                                handleChange("협력업체")
                            }}
                        >
                            협력업체
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
            )}
            <div className="w-[80vw] min-h-[100vh] h-full m-auto">
                <div className="w-full">
                    <div className="pt-20 pb-10 text-left flex">
                            <GrEdit size={30} className="my-auto mr-4"/>
                            {parentPage.action === "edit" ? (
                                <>
                                <Label className="font-bold md:text-3xl text-xl">Edit Post From {parentPage.parent}</Label>
                                </>
                            ):(
                                <Label className="font-bold md:text-3xl text-xl">New Post From {parentPage.parent}</Label>
                            )}
                    </div>
                    {parentPage.parent !== "LikeMe" && (
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
                    )}
                    <div>
                        <hr
                            className="w-[10vh] bg-black h-2 mb-4"
                        />
                    </div>
                    <div className="filebox my-6">
                        {thumb.length > 0 ? (
                            <>
                            <div className="text-left">
                                {parentPage.parent === "LikeMe" ? (
                                    <>
                                    <Label className="font-bold text-xl">Img</Label>
                                    </>
                                ) : (
                                    <Label className="font-bold text-xl">Thumbnail</Label>
                                )}
                                <div className="flex">
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
                                    {parentPage.parent === "LikeMe" ? (
                                        <Label className="font-bold">Click To Upload Image.</Label>
                                    ) : (
                                        <Label className="font-bold">Click To Upload Thumbnail.</Label>
                                    )}
                                    
                                </div>
                            </div>
                            </>
                        )}
                        
                    </div>
                    {parentPage.parent === "Academy" && (
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
                    )}
                    {parentPage.parent === "LikeMe" && parentPage.tab === "teachers" && (
                        <>
                        <div className="flex">
                            <div>
                            <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
                            </div>
                            <div className="flex flex-col w-full pl-12 text-left">
                                <div>
                                    <Input
                                        className="w-full h-full text-lg border-b font-bold focus:outline-0"
                                        placeholder="이름"
                                        defaultValue={detailData.name}
                                        value={name}
                                        onChange={(e)=>{
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="flex pt-6">
                                    <Label className="font-bold text-xl">자격</Label>
                                    <Button 
                                        className="bg-green-500 px-2 font-bold text-white text-xl ml-4"
                                        onClick={()=>{
                                            addQuali();
                                        }}
                                    >
                                        <span>+</span>
                                    </Button>
                                </div>
                                <div>
                                    {renderQualiArr()}
                                </div>
                                <div className="flex pt-6">
                                    <Label className="font-bold text-xl">경력</Label>
                                    <Button 
                                        className="bg-green-500 px-2 font-bold text-white text-xl ml-4"
                                        onClick={()=>{
                                            addHistory();
                                        }}
                                    >
                                        <span>+</span>
                                    </Button>
                                </div>
                                <div>
                                    {renderHistory()}
                                </div>

                            </div>
                        </div>
                        </>
                    )}
                    
                    <div className="flex justify-end my-4 space-x-2">
                        <Button className="bg-yellow-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{navigate(-1)}}>취소</Button>
                        {parentPage.tab === "gallery" && (
                            <Button className="bg-red-500 font-bold text-white py-2 px-5 rounded-lg" onClick={()=>{deletePost(detailData.id)}}>삭제</Button>
                        )}
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