import React, { useEffect, useState } from "react"
import {
    Label,
    Button,
    Table,
    Input,
} from "reactstrap";
import { BiMap, BiX, BiImage } from "react-icons/bi";
import { GrUpload, GrTrash } from "react-icons/gr";
import FileBase64 from "react-file-base64";
import axios from "axios";
import moment from "moment";
import { Navigate, useNavigate } from "react-router-dom";

const modules = {
    toolbar: [
        //[{ 'font': [] }],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        ['clean']
    ],
}

const formats = [
    //'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',        
]

const ShowModal = (props) => {
    const { open, close, data } = props;
    const navigate = useNavigate();
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [title, setTitle] = useState("");
    const [thumb, setThumb] = useState([]);


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

    const addPhoto = () => {
        if(thumb.length == 0){
            alert("이미지를 등록해주세요.")
        }else{
            axios.post("http://127.0.0.1:8000/postGallery/", {
                title: title,
                img:thumb[0].base64,
                created_at: moment().format('YYYY-MM-DD')
            })
            .then(function (response) {
                return close, navigate(0)
            })
            .catch(function (error) {
                console.log(error);
                alert("이미지 등록 오류")
            });
        }
        
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            data === "addGallery" ? (
                <>
                <section className="w-full max-w-[30vw]">
                    <header className="flex p-4">
                        <div className="flex">
                            <BiImage size={40} className="mr-2"/>
                            <Label className="leading-[40px] font-bold text-2xl">Add New Photo</Label>
                        </div>
                        <div className="ml-auto">
                            <Button className="close" onClick={close}>
                                <BiX size={40} />
                            </Button>
                        </div>
                    </header>
                    <main className="px-4">
                        <div className="w-full text-left">
                            <div className="flex flex-col">
                                <Label className="font-bold text-xl">Title</Label>
                                <Input
                                    className="w-full h-full border-b h-[4vh] font-bold focus:outline-0"
                                    placeholder="제목을 입력하세요"
                                    value={title}
                                    onChange={(e)=>{
                                        setTitle(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="filebox my-6">
                                {thumb.length > 0 ? (
                                    <>
                                    <div className="text-left">
                                        <Label className="font-bold text-xl">Image</Label>
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
                                        <div className="w-[28vw] text-center absolute translate-y-1/2">
                                            <GrUpload size={50} className="m-auto mb-4"/>
                                            <Label className="font-bold">Click To Upload Photo.</Label>
                                        </div>
                                    </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </main>
                    <footer className="p-4 space-x-4">
                        <Button 
                            className="close px-4 py-2 rounded-lg text-white font-bold bg-red-300 hover:bg-red-400"
                            onClick={close}
                        >
                            취소
                        </Button>
                        <Button 
                            className="close px-4 py-2 rounded-lg text-white font-bold bg-[#93AEF9] hover:bg-[#758BC7]"
                            onClick={()=>{
                                addPhoto()
                            }}
                        >
                            등록
                        </Button>
                    </footer>
                </section>
                </>
            ) : (
                <section className="w-full max-w-[30%]">
                    <header className="flex p-4">
                        <div className="flex">
                            <BiMap size={40} className="mr-2"/>
                            <Label className="leading-[40px] font-bold text-2xl">{data.label}</Label>
                        </div>
                        <div className="ml-auto">
                            <Button className="close" onClick={close}>
                                <BiX size={40} />
                            </Button>
                        </div>
                    </header>
                    <main className="px-4">
                        <div className="border h-[30vh]">
                        </div>
                        <div className="w-full mt-6">
                            <Table className="w-full h-[25vh]">
                                <tr className="border-y-2 ">
                                    <td className="w-[20%] font-bold border-r">지점명</td>
                                    <td className="text-left px-4">{data.label}</td>
                                </tr>
                                <tr className="border-y-2">
                                    <td className="w-[20%] font-bold border-r">전화번호</td>
                                    <td className="text-left px-4">{data.tel}</td>
                                </tr>
                                <tr className="border-y-2">
                                    <td className="w-[20%] font-bold border-r">주소</td>
                                    <td className="text-left px-4">{data.address}</td>
                                </tr>
                                <tr className="border-y-2">
                                    <td className="w-[20%] font-bold border-r">운영시간</td>
                                    <td className="text-left px-4">{data.open}</td>
                                </tr>
                                <tr className="border-y-2">
                                    <td className="w-[20%] font-bold border-r">주차정보</td>
                                    <td className="text-left px-4"></td>
                                </tr>
                            </Table>
                        </div>
                    </main>
                    <footer className="p-4 space-x-4">
                        <Button 
                            className="close px-4 py-2 rounded-lg text-white font-bold bg-[#93AEF9] hover:bg-[#758BC7]"
                            onClick={()=>{
                                window.open('https://pf.kakao.com/_xfxjxgTs', '_blank')
                            }}
                        >
                            카톡상담
                        </Button>
                        <Button 
                            className="close px-4 py-2 rounded-lg text-white font-bold bg-[#93AEF9] hover:bg-[#758BC7]"
                            onClick={()=>{
                                window.open('https://naver.me/FzHyeLd7', '_blank')
                            }}
                        >
                            네이버 예약
                        </Button>
                    </footer>
                </section>
            )
        ) : null}
        </div>
    )
}
export default ShowModal