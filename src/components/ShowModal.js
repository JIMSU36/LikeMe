import React from "react"
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import { BiMap, BiX } from "react-icons/bi";

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
    

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
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
        ) : null}
        </div>
    )
}
export default ShowModal