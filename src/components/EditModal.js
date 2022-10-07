import React, { useState } from "react"
import {
    Label,
    Button,
    Input,
} from "reactstrap";
import { BiX, BiImage } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const EditModal = (props) => {
    const { open, close, row} = props;
    const navigate = useNavigate();
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [title, setTitle] = useState("");
    const [thumb, setThumb] = useState([]);

    console.log(row)

    const editPhoto = () => {

    }


    return(
        <>
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <>
            <section className="w-full max-w-[30vw]">
                <header className="flex p-4">
                    <div className="flex">
                        <BiImage size={40} className="mr-2"/>
                        <Label className="leading-[40px] font-bold text-2xl">Edit Photo</Label>
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
                                editPhoto()
                            }}
                        >
                            수정
                        </Button>
                    </footer>
            </section>
            </>
        ) : null}
        </div>
        </>
    )
}

export default EditModal;