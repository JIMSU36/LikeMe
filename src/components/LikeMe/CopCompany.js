import React, { lazy, useCallback, useContext, useEffect, useState } from "react"
import ImageViewer from 'react-simple-image-viewer';
import { useNavigate } from 'react-router-dom';
import {
    Button,
} from "reactstrap";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
import Config from "../../config";
import { useLikeMeTabContext } from "../../Contexts/LikeMeTabContext";
const loading = import("../Loading");
const Loading = lazy(() => loading);

const CopCompany = () => {
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { user } = useContext(AuthContext);
    const { setlTab } = useLikeMeTabContext();
    
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [arrImg, setArrImg] = useState([]);

    useEffect(()=>{
        setLoading(true);
        document.body.style.overflow = "hidden";
        axios
        .get(`${Config.restApi}/getCoCompany/`)
        .then((response) => {
            setImages([...response.data]);
            console.log(response.data);

            response.data.sort((a, b)=>{
                return b.id - a.id
            }).map((row, idx)=>{
                arrImg.push(row.decodeImg);
                setArrImg(arrImg);
                forceUpdate();
            })
            setLoading(false)
            document.body.style.overflow = "unset";
        })
        .catch(function (error) {
            console.log(error);
        });
    },[arrImg])

    //이미지 뷰어
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    
    const deleteCop = (id) => {
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            setLoading(true);
            document.body.style.overflow = "hidden";
            axios.delete(`${Config.restApi}/deleteCoCompany/`+id)
            .then((response) => {
                setlTab("협력업체");
                setArrImg([]);
                forceUpdate();
                setLoading(false)
                document.body.style.overflow = "unset";
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{   //취소
            return false;
        }         
    }


    return(
        <>
        {loading && 
            <Loading/>
        }
        <div className="w-[80vw] h-full m-auto">
            {user && (
                <div className='flex mb-12'>
                    <Button 
                        className='add-btn md:ml-auto  my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                        onClick={()=>{
                            navigate(thisPage+"/AddNewPost", {
                                state:{
                                    parentPageName:"라이크미",
                                    parent:"LikeMe",
                                    tab:"company",
                                    action:"add"
                                }
                            })
                        }}
                    >
                        + Add New
                    </Button>
                </div>
            )}
        </div>
        <div className="w-[80vw] h-full m-auto grid md:grid-cols-3 grid-cols-1 gap-12 ">
            {images.sort((a,b)=>{
                return b.id - a.id
            }).map((src, index) => (
                <>
                <div className="cop-img flex flex-col">
                    <img
                        className="h-auto"
                        src={ src.decodeImg }
                        onClick={ () => openImageViewer(index) }
                        key={ index }
                    />
                    {user && (
                        <>
                        <div className='justify-center my-4'>
                            <Button
                                className='bg-red-400 px-4 py-2 rounded-lg font-bold text-white hover:bg-red-600'
                                onClick={()=>{
                                    deleteCop(src.id);
                                }}
                            >
                                삭제
                            </Button>
                        </div>
                        </>
                    )}
                </div>
                </>
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ arrImg }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>
        </>
    )
}

export default CopCompany