import React, { useContext, useEffect, useState } from "react"
import Instructor1 from '../../assets/images/김택규_강사_소개_이미지.png'
import Instructor2 from '../../assets/images/김경민_강사_소개_이미지.png'
import Instructor3 from '../../assets/images/유영섭_강사_소개_이미지.png'
import Instructor4 from '../../assets/images/권순목_강사_소개_이미지.png'
import { AiOutlineDown } from "react-icons/ai";
import {
    Label,
    Button,
    List,
} from "reactstrap";
import axios from "axios";
import Config from "../../config";
import { useNavigate } from "react-router-dom"
import AuthContext from "../../Contexts/AuthContext"

const Instructor = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const thisPage = window.location.pathname;
    const [rowData, setRowData] = useState([]);
    const [arrInstructor, setArrInstructor] = useState([]);

    useEffect(()=>{
        axios
        .get(`${Config.restApi}/getTrainerList/`)
        .then((response) => {
            setRowData([...response.data]);
            console.log(response.data);

            response.data.sort((a, b)=>{
                return b.id - a.id
            }).map((row, idx)=>{
                arrInstructor.push(row.decodeImg);
                setArrInstructor(arrInstructor);
                forceUpdate();
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    },[arrInstructor]);

    console.log(rowData)

    const deleteInstructor = (id) => {
        if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
            axios.delete(`${Config.restApi}/deleteTrainerList/`+id)
            .then((response) => {
                setArrInstructor([]);
                forceUpdate();
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
        {user && (
            <div className='w-[80vw] flex'>
                <Button 
                    className='add-btn md:ml-auto  my-4 px-4 py-2 bg-[#93AEF9] rounded-lg text-white font-bold hover:bg-[#758BC7]'
                    onClick={()=>{
                        navigate(thisPage+"/AddNewPost", {
                            state:{
                                parentPageName:"라이크미",
                                parent:"LikeMe",
                                tab:"teachers",
                                action:"add"
                            }
                        })
                    }}
                >
                    + Add New
                </Button>
            </div>
        )}
        {/* pc화면 */}
        <div className="w-[80vw] h-full m-auto hidden md:grid grid-cols-2 gap-y-12 ">
            
            {rowData.map((row, index)=>{
                return(
                    index%2 === 1 ? (
                        <>
                        <div className="w-[80%] text-left text-lg font-semibold my-auto ">
                            <div className="flex flex-col">
                                <List className="space-y-4">
                                    {row.qualification_arr.map((row, index)=>{
                                        return <li>{row}</li>
                                    })}
                                </List>
                            </div>
                            <hr className="my-12 h-1" style={{backgroundColor:row.color_code.hex}}/>
                            <div className="flex">
                                <Label className="w-[80%] font-bold xl:text-5xl lg:text-4xl">{row.trainer_name}</Label>
                                {user && (
                                    <>
                                    <div className="absolute translate-y-20">
                                        <div className="flex space-x-2">
                                            <Button 
                                                className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    navigate(thisPage+"/AddNewPost", {
                                                        state:{
                                                            parentPageName:"라이크미",
                                                            parent:"LikeMe",
                                                            tab:"teachers",
                                                            action:"edit",
                                                            data: row.id
                                                        }
                                                    })
                                                }}
                                            >
                                                수정
                                            </Button>
                                            <Button 
                                                className="bg-red-400 hover:bg-red-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    deleteInstructor(row.id);
                                                }}
                                            >
                                                삭제
                                            </Button>
                                        </div>
                                    </div>
                                    </>
                                )}
                                <div className="w-[120%] ml-4 grid grid-col-1 gap-y-2 font-bold xl:text-2xl">
                                    {row.history_arr.map((row, index)=>{
                                        return <Label>{row}</Label>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="m-auto ">
                            <img src={row.decodeImg} />
                        </div>
                        </>
                    ) : index%2 === 0 && (
                        <>
                        <div className="m-auto">
                            <img src={row.decodeImg} />
                        </div>
                        <div className="ml-auto w-[80%] text-left text-lg font-semibold my-auto ">
                            <div className="flex flex-col  space-y-4">
                                <List className="space-y-4">
                                    {row.qualification_arr.map((row, index)=>{
                                        return <li>{row}</li>
                                    })}
                                </List>
                            </div>
                            <hr className="my-12 h-1" style={{backgroundColor:row.color_code.hex}}/>
                            <div className="flex">
                                <Label className="w-[80%] font-bold xl:text-5xl lg:text-4xl">{row.trainer_name}</Label>
                                {user && (
                                    <>
                                    <div className="absolute translate-y-20">
                                        <div className="flex space-x-2">
                                            <Button 
                                                className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    navigate(thisPage+"/AddNewPost", {
                                                        state:{
                                                            parentPageName:"라이크미",
                                                            parent:"LikeMe",
                                                            tab:"teachers",
                                                            action:"edit",
                                                            data: row.id
                                                        }
                                                    })
                                                }}
                                            >
                                                수정
                                            </Button>
                                            <Button 
                                                className="bg-red-400 hover:bg-red-300 px-4 py-2 rounded-lg text-white"
                                                onClick={()=>{
                                                    deleteInstructor(row.id);
                                                }}
                                            >
                                                삭제
                                            </Button>
                                        </div>
                                    </div>
                                    </>
                                )}
                                <div className="w-[120%] ml-4 grid grid-col-1 gap-y-2 font-bold xl:text-2xl">
                                    {row.history_arr.map((row, index)=>{
                                        return <Label>{row}</Label>
                                    })}
                                </div>
                            </div>
                        </div>
                        </>
                    )
                )
            })}
        </div>


        {/* 모바일화면 */}
        <div className="w-[80vw] h-full m-auto grid md:hidden grid-cols-1">
            <div className="m-auto ">
                <img alt="김경민" src={Instructor2}/>
            </div>
            <div className="text-left text-lg font-semibold my-auto ">
                <hr className="w-[40%] my-4 bg-[#9CD5CE] h-1"/>
                <div className="flex">
                    <div className="grid grid-col-1 ">
                        <Label className="font-bold text-2xl">김경민</Label>
                        <Button 
                            className="ml-auto flex my-auto mt-10"
                            onClick={()=>{
                                setOpen1(!open1);
                            }}
                        >
                            상세 경력
                            <AiOutlineDown className="my-auto ml-2"/>
                        </Button>
                    </div>
                    <div className="ml-4 flex flex-col font-bold text-sm">
                        <Label className="mt-1">11년차 물리치료사 겸임</Label>
                        <Label className="mt-1">운동치료, 도수치료사</Label>
                        <Label className="mt-1">체형교정 전문가</Label>
                        <Label className="mt-1">카이로프랙틱사</Label>
                    </div>
                </div>
                {open1 && (
                    <>
                    <div className="text-sm mt-4">
                        <div className="flex flex-col">
                            <p>- 자연치유학과 석사 학위</p>
                            <p className="mt-2">- 생활스포츠 지도자 공인 자격 취득</p>
                            <p className="mt-2">- 모던필라테스 강사 국제 자격증 취득</p>
                            <p className="mt-2">- KIETIC ERGOCISE BASED ON</p>
                            <p className="indent-3">MOVEMOENT ANALYSIS </p>
                            <p className="indent-3">(KEMA 움직임 연구) 과정 이수</p>
                            <p className="mt-2">- INTERNATIONAL SCORHOTH 3D</p>
                            <p className="indent-3">SCOLIOSIS THERAPY </p>
                            <p className="indent-3">(ISS 측만증 교육) 과정 이수</p>
                            <p className="mt-2">- MEDICAL TRAINING THERAPY</p>
                            <p className="indent-3">& PRESCRIPTION 분과 과정 이수</p>
                        </div>
                    </div>
                    </>
                )}
            </div>


            <div className="m-auto mt-12">
                <img  alt="유영섭" src={Instructor3} />
            </div>
            <div className="text-left text-lg font-semibold my-auto ">
                <hr className="w-[40%] my-4 bg-[#9FAFBC] h-1"/>
                <div className="flex">
                    <div className="grid grid-col-1 ">
                        <Label className="font-bold text-2xl">유영섭</Label>
                        <Button 
                            className="ml-auto flex my-auto mt-10"
                            onClick={()=>{
                                setOpen2(!open2);
                            }}
                        >
                            상세 경력
                            <AiOutlineDown className="my-auto ml-2"/>
                        </Button>
                    </div>
                    <div className="ml-4 flex flex-col font-bold text-sm">
                        <Label className="mt-1">근막 케어, 컨디셔닝 전문강사</Label>
                        <Label className="mt-1">기업 전문 건강 강의 강사</Label>
                        <Label className="mt-1">웨이트트레이닝 운동처방사</Label>
                        <Label className="mt-1">바디프로필 전문강사</Label>
                    </div>
                </div>
                {open2 && (
                    <>
                    <div className="text-sm mt-4">
                        <div className="flex flex-col">
                            <p>- 생활스포츠 지도자 공인자격 취득</p>
                            <p className="mt-2">- 청소년체형교정, 청소년다이어트 전문강사</p>
                            <p className="mt-2">- 동계스포츠 선수트레이닝 전담강사</p>
                            <p className="mt-2">- 스포츠의학트레이닝아카데미 교육강사</p>
                            <p className="mt-2">- 서울시 치매예방운동 기획 및 전문강사</p>
                            <p className="mt-2">- 기업대상 건강운동관리 전문강사</p>
                            <p className="mt-2">- 서울시 인증 건강운동전문강사</p>
                            <p className="mt-2">- 체대입시, 공무원 실기 전문강사</p>
                        </div>
                    </div>
                    </>
                )}
            </div>


            <div className="m-auto mt-12">
                <img alt="권순목" src={Instructor4} />
            </div>
            <div className="text-left text-lg font-semibold my-auto ">
                <hr className="w-[40%] my-4 bg-[#CBACD9] h-1"/>
                <div className="flex">
                    <div className="grid grid-col-1 ">
                        <Label className="font-bold text-2xl">권순목</Label>
                        <Button 
                            className="ml-auto flex my-auto mt-10"
                            onClick={()=>{
                                setOpen3(!open3);
                            }}
                        >
                            상세 경력
                            <AiOutlineDown className="my-auto ml-2"/>
                        </Button>
                    </div>
                    <div className="ml-4 flex flex-col font-bold text-sm">
                        <Label className="mt-1">체육대학 선수출신 학사</Label>
                        <Label className="mt-1">근막케어, 컨디셔닝 전문강사</Label>
                        <Label className="mt-1">웨이트트레이닝 운동처방사</Label>
                        <Label className="mt-1">바디프로필 전문강사</Label>
                    </div>
                </div>
                {open3 && (
                    <>
                    <div className="text-sm mt-4">
                        <div className="flex flex-col">
                            <p>- 생활스포츠 지도자 공인자격 취득</p>
                            <p className="mt-2">- 축구선수 트레이닝 전문강사</p>
                            <p className="mt-2">- 기능성 운동 및 운동재활 처방사</p>
                            <p className="mt-2">- 스포츠의학 트레이닝 아카데미 교육 강사</p>
                            <p className="mt-2">- 고혈압, 당뇨질환 및 대사 개선 전문강사</p>
                            <p className="mt-2">- 바디프로필, 웨이트트레이닝 전문가사</p>
                            <p className="mt-2">- 선수, 일반인 컨디셔닝 전문가</p>
                            <p className="mt-2">- 바디쉐입, 바디 디자인 전문가</p>
                        </div>
                    </div>
                    </>
                )}
            </div>


            <div className="m-auto mt-12">
                <img  alt="김택규" src={Instructor1} />
            </div>
            <div className="text-left text-lg font-semibold my-auto ">
                <hr className="w-[40%] my-4 bg-[#727272] h-1"/>
                <div className="flex">
                    <div className="grid grid-col-1 ">
                        <Label className="font-bold text-2xl">김택규</Label>
                        <Button 
                            className="ml-auto flex my-auto mt-14"
                            onClick={()=>{
                                setOpen4(!open4);
                            }}
                        >
                            상세 경력
                            <AiOutlineDown className="my-auto ml-2"/>
                        </Button>
                    </div>
                    <div className="ml-4 flex flex-col font-bold text-sm">
                        <p>체육대학 선수 출신 학사</p>
                        <p className="mt-1">스포츠의학 선수</p>
                        <p>트레이닝 석사</p>
                        <p className="mt-1">정부 지자체 교육 강사</p>
                        <p className="mt-1">엘리트 선수 트레이닝</p>
                    </div>
                </div>
                {open4 && (
                    <>
                    <div className="text-sm mt-4">
                        <div className="flex flex-col">
                            <p>- 생활스포츠 지도자 공인자격 취득</p>
                            <p className="mt-2">- 인천 연수구청 씨름단 의무 트레이너</p>
                            <p className="mt-2">- 국가대표 마라토너 전담 의무 트레이너</p>
                            <p className="mt-2">- 마곡 LG사이언스 임직원 건강 트레이너</p>
                            <p className="mt-2">- 강서구 선발 수영선수 전담 트레이너</p>
                            <p className="mt-2">- 서울시 인증 건강 운동 강사</p>
                            <p className="mt-2">- 호주 BMW 임직원 건강 관리사</p>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Instructor