import React, { lazy, useCallback, useContext, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import axios from "axios";
import {
    Button,
} from "reactstrap";
import AuthContext from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Config from '../../config';
const loading = import("../Loading");
const Loading = lazy(() => loading);

const UserGalleryList = () => {
    const { user } = useContext(AuthContext);
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const navigate = useNavigate();
    const thisPage = window.location.pathname;

    console.log(thisPage)
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [arrImg, setArrImg] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rowData, setRowData] = useState([]);


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };


    useEffect(()=>{
        setLoading(true)
        document.body.style.overflow = "hidden";
        axios
        .get(`${Config.restApi}/getGallery/`)
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);
     
            response.data.sort((a, b)=>{
                return b.id - a.id
            }).map((row, idx)=>{
                arrImg.push(row.decodeImg);
                setArrImg(arrImg);
            })
            setLoading(false)
            document.body.style.overflow = "unset";
        })
        .catch(function (error) {
            console.log(error);
        });
    },[arrImg])


    return(
        <>
        <div className="w-[70vw] h-full m-auto">
            {user && (
                <div className='flex'>
                    <Button 
                        className='add-btn md:ml-auto my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                        onClick={()=>{
                            navigate(thisPage+"/AddNewPost", {
                                state:{
                                    parentPageName:"스튜디오",
                                    parent:"Studio",
                                    tab:"gallery",
                                    action:"add"
                                }
                            })
                        }}
                    >
                        + Add New
                    </Button>
                </div>
            )}
            {loading && 
                <Loading/>
            }
            <div className='imgbox w-full h-full mt-12 grid md:grid-cols-6 grid-cols-1 gap-4'>
                {rowData.sort((a, b) => {
                    return b.id - a.id
                }).map((row, index) => {
                    return (
                        <>
                        <div className='m-auto'>
                            <div className='h-[20vh] grid content-center'>
                                <img
                                    className='galleryImg cursor-pointer'
                                    src={row.decodeImg}
                                    alt={row.title}
                                    onClick={ () => openImageViewer(index) }
                                    key={ index }
                                    fetchpriority="high"
                                    loading='lazy'
                                    decoding='async'
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </div>
                            
                            {user && (
                                <>
                                <div className='flex space-x-1 justify-center my-4'>
                                    <Button
                                        className='bg-yellow-400 px-4 py-2 rounded-lg font-bold text-white'
                                        onClick={()=>{
                                            navigate(thisPage+"/EditPost"+"/"+row.title, {
                                                state:{
                                                    parentPageName:"스튜디오",
                                                    parent:"Studio",
                                                    action: "edit",
                                                    tab:"gallery",
                                                    data: row,
                                                }
                                            })
                                        }}
                                    >
                                        수정
                                    </Button>
                                </div>
                                </>
                            )}
                        </div>
                        </>
                    )
                })}
            </div>
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

export default UserGalleryList;