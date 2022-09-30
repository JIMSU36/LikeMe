import React, { useEffect, useState } from 'react';
import { GrNext } from "react-icons/gr";
import {
    Label,
    Button,
} from "reactstrap";
import Select from 'react-select'

import mogokImg from '../../assets/images/magok.jpg'
import ujangsanImg from '../../assets/images/ujangsan.jpg'

//카카오 지도
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ShowModal from '../ShowModal';
import imgMarker from '../../assets/images/마커.png'

const ViewMap = () => {
    const [zoomable, setZoomable] = useState(true)
    const [selectPlace, setSelectPlace] = useState("");
    const places = [
        { value: '마곡역점', label: '마곡역점', tel: '02-2666-0191', address:'서울 강서구 공항대로 168 스타벅스 건물 2층', open: "평일 06:00 - 23:00  토요일 10:00 - 18:00", parking: "2시간 무료",img: mogokImg,  lat:37.559249, lng:126.826098},
        { value: '우장산역점', label: '우장산역점', tel: '0507-1461-0285', address:'서울 강서구 강서로45길 49-4 B1층 (내발산동, 태승훼미리아파트 5차)', open: "평일 06:00 - 24:00  토요일 10:00 - 18:00", img: ujangsanImg, lat:37.547880, lng:126.832767 },
    ]
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };


    return(
        <>
        <ShowModal open={showModal} close={closeModal} data={selectPlace}/>
        <div className='w-full h-[100vh]'>
            <Map
                className='z-[99]'
                center={{ lat: selectPlace.lat !== undefined ? selectPlace.lat : 37.529567, lng: selectPlace.lng !== undefined ? selectPlace.lng : 126.983971 }}
                style={{ width: "100%", height: "100%" }}
                level={selectPlace ? 3 : 8}
                zoomable={false}
            >
                <MapMarker 
                    position={{ lat: selectPlace.lat, lng:selectPlace.lng }}
                    image={{
                        src: imgMarker,
                        size:{
                            width: 66,
                            height: 82,
                        }, 
                        options:{
                            offset:{
                                x: 32,
                                y: 82,
                            }
                        }
                    }}
                />
            </Map>
   
            <div className='w-[25%] max-h-[70%] h-auto z-[99] bg-white relative -top-[80vh] left-[5vw] shadow-xl'>
                <div className='w-full h-[10vh] p-6 pt-12 text-left'>
                    <Label className='text-3xl font-bold'>지점 위치</Label>
                </div>
                <div className='w-full max-h-[60vh] p-6 flex flex-col overflow-y-auto'>
                    <Select 
                        className="map-place-select text-black text-left"
                        placeholder='지점 선택' 
                        options={places}  
                        value={places.find((op)=>{
                            return op.value === selectPlace;
                          })}
                          onChange={(e)=>{
                            console.log(e)
                            setSelectPlace(e);
                          }}
                        styles={{
                            // Fixes the overlapping problem of the component
                            menu: (places) => ({ ...places, zIndex: 99999 }),
                            control: (base, state) => ({ ...base,background: "none", borderColor:"gray"}),
                        }}
                    />

                    <div className='border-t-2  mt-4'>
                        <div className='my-4 text-left px-4'>
                            <div className='flex'>
                                <Label className='text-lg font-bold'>{selectPlace.label}</Label>
                                {selectPlace && (
                                    <GrNext 
                                        className='my-auto ml-auto cursor-pointer'
                                        onClick={()=>{
                                            return selectPlace !== "" && (
                                                openModal()
                                            )
                                        }}
                                    />
                                )}
                            </div>
                            <div className='my-4 flex flex-col space-y-4'>
                                <Label className='text-xl'>{selectPlace.tel}</Label>
                                <Label>{selectPlace.address}</Label>
                            </div>
                            <div>
                                <Button 
                                    className='text-sm bg-[#93AEF9] hover:bg-[#758BC7] font-bold text-white w-full h-[5vh]'
                                    onClick={()=>{
                                        return selectPlace !== "" && (
                                            openModal()
                                        )
                                    }}
                                >
                                    지점 자세히 보기
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        
        </>
    )
};

export default ViewMap;