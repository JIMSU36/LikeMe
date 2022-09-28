import React, { useCallback, useContext, useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import axios from "axios";
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import moment from 'moment';
import AuthContext from '../../Contexts/AuthContext';
import ShowModal from '../ShowModal';
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import EditModal from '../EditModal';

const UserGalleryList = () => {
    const { user } = useContext(AuthContext);
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [arrImg, setArrImg] = useState([]);
    const [rowData, setRowData] = useState([]);

    const [modalId, setModalId] = useState();
    const [modalData, setModalData] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };
    const closeEditModal = () => {
        setShowEditModal(false);
    };


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };


    useEffect(()=>{
        console = {};
        console.log = function(){};
        console.warn = function(){};
        console.error = function(){};
        
        axios
        .get("http://127.0.0.1:8000/getGallery/")
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        fetchImgData();
    },[])
    

    const fetchImgData = () => {
        rowData.map((row, index)=>{
            arrImg.push(row.decodeImg);
            setArrImg(arrImg);
            forceUpdate();
            console.log()
        });
    }

    const deletePhoto = (id) =>{
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            axios.delete("http://127.0.0.1:8000/deleteGallery/"+id)
            .then((response) => {
                navigate(0);
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
        {/* <EditModal open={showEditModal} close={closeEditModal} row={modalId} /> */}
        <ShowModal open={showModal} close={closeModal} data={modalData} />
        <div className="w-[70vw] h-full m-auto">
            {user && (
                <div className='flex'>
                    <Button 
                        className='ml-auto my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                        onClick={()=>{
                            setModalData("addGallery")
                            openModal();
                        }}
                    >
                        + Add New
                    </Button>
                </div>
            )}
            <div className='imgbox w-full h-full grid grid-cols-6 gap-4'>
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
                                />
                            </div>
                            
                            {user && (
                                <>
                                <div className='flex space-x-1 justify-center my-4'>
                                    {/* <Button
                                        className='bg-yellow-400 px-4 py-2 rounded-lg font-bold text-white'
                                        onClick={()=>{
                                            setModalData("editGallery")
                                            setModalId(row)
                                            openEditModal();
                                        }}
                                    >
                                        수정
                                    </Button> */}
                                    <Button
                                        className='bg-red-400 px-4 py-2 rounded-lg font-bold text-white'
                                        onClick={()=>{
                                            deletePhoto(row.id);
                                        }}
                                    >
                                        삭제
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