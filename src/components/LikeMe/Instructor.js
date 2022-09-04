import React from "react"
import Instructor1 from '../../assets/images/김택규_강사_소개_이미지.png'
import Instructor2 from '../../assets/images/김경민_강사_소개_이미지.png'
import Instructor3 from '../../assets/images/유영섭_강사_소개_이미지.png'
import Instructor4 from '../../assets/images/권순목_강사_소개_이미지.png'
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Instructor = () => {
    return(
        <>
        <div className="w-[80vw] h-full m-auto grid grid-cols-2 gap-y-12 ">
            <div className="m-auto">
                <img  alt="김택규" src={Instructor1} />
            </div>
            <div className="ml-auto w-[80%] text-left text-lg font-semibold my-auto ">
                <div className="flex flex-col  space-y-4">
                        <span>- 생활스포츠 지도자 공인자격 취득</span>
                        <span>- 인천 연수구청 씨름단 의무 트레이너</span>
                        <span>- 국가대표 마라토너 전담 의무 트레이너</span>
                        <span>- 마곡 LG사이언스 임직원 건강 트레이너</span>
                        <span>- 강서구 선발 수영선수 전담 트레이너</span>
                        <span>- 서울시 인증 건강 운동 강사</span>
                        <span>- 호주 BMW 임직원 건강 관리사</span>
                </div>
                <hr className="my-12 bg-[#727272] h-1"/>
                <div className="flex">
                    <Label className="font-bold text-5xl">김택규</Label>
                    <div className="ml-auto grid grid-col-1 gap-y-2 font-bold text-2xl">
                        <Label>체육대학 선수 출신 학사</Label>
                        <Label>스포츠의학 선수 트레이닝 석사</Label>
                        <Label>정부 지자체 교육 강사</Label>
                        <Label>엘리트 선수 트레이닝</Label>
                    </div>
                </div>
            </div>

           
            <div className="w-[80%] text-left text-lg font-semibold my-auto ">
                <div className="flex flex-col  space-y-4">
                    <span>- 자연치유학과 석사 학위</span>
                    <span>- 생활스포츠 지도자 공인 자격 취득</span>
                    <span>- 모던필라테스 강사 국제 자격증 취득</span>
                    <span>- KIETIC ERGOCISE BASED ON MOVEMOENT ANALYSIS (KEMA 움직임 연구) 과정 이수</span>
                    <span>- INTERNATIONAL SCORHOTH 3D SCOLIOSIS THERAPY (ISS 측만증 교육) 과정 이수</span>
                    <span>- MEDICAL TRAINING THERAPY & PRESCRIPTION 분과 과정 이수</span>
                </div>
                <hr className="my-12 bg-[#9CD5CE] h-1"/>
                <div className="flex">
                    <Label className="font-bold text-5xl">김경민</Label>
                    <div className="ml-auto grid grid-col-1 gap-y-2 font-bold text-2xl">
                        <Label>11년차 물리치료사 겸임</Label>
                        <Label>운동치료, 도수치료사</Label>
                        <Label>체형교정 전문가</Label>
                        <Label>카이로프랙틱사</Label>
                    </div>
                </div>
            </div>
            <div className="m-auto ">
                <img alt="김경민" src={Instructor2} />
            </div>


            <div className="m-auto">
                <img  alt="유영섭" src={Instructor3} />
            </div>
            <div className="ml-auto w-[80%] text-left text-lg font-semibold my-auto ">
                <div className="flex flex-col  space-y-4">
                        <span>- 생활스포츠 지도자 공인자격 취득</span>
                        <span>- 청소년체형교정, 청소년다이어트 전문강사</span>
                        <span>- 동계스포츠 선수트레이닝 전담강사</span>
                        <span>- 스포츠의학트레이닝아카데미 교육강사</span>
                        <span>- 서울시 치매예방운동 기획 및 전문강사</span>
                        <span>- 기업대상 건강운동관리 전문강사</span>
                        <span>- 서울시 인증 건강운동전문강사</span>
                        <span>- 체대입시, 공무원 실기 전문강사</span>
                </div>
                <hr className="my-12 bg-[#9FAFBC] h-1"/>
                <div className="flex">
                    <Label className="font-bold text-5xl">유영섭</Label>
                    <div className="ml-auto grid grid-col-1 gap-y-2 font-bold text-2xl">
                        <Label>근막 케어, 컨디셔닝 전문강사</Label>
                        <Label>기업 전문 건강 강의 강사</Label>
                        <Label>웨이트트레이닝 운동처방사</Label>
                        <Label>바디프로필 전문강사</Label>
                    </div>
                </div>
            </div>


            <div className="w-[80%] text-left text-lg font-semibold my-auto ">
                <div className="flex flex-col  space-y-4">
                    <span>- 생활스포츠 지도자 공인자격 취득</span>
                    <span>- 축구선수 트레이닝 전문강사</span>
                    <span>- 기능성 운동 및 운동재활 처방사</span>
                    <span>- 스포츠의학 트레이닝 아카데미 교육 강사</span>
                    <span>- 고혈압, 당뇨질환 및 대사 개선 전문강사</span>
                    <span>- 바디프로필, 웨이트트레이닝 전문가사</span>
                    <span>- 선수, 일반인 컨디셔닝 전문가</span>
                    <span>- 바디쉐입, 바디 디자인 전문가</span>
                </div>
                <hr className="my-12 bg-[#CBACD9] h-1"/>
                <div className="flex">
                    <Label className="font-bold text-5xl">권순목</Label>
                    <div className="ml-auto grid grid-col-1 gap-y-2 font-bold text-2xl">
                        <Label>체육대학 선수출신 학사</Label>
                        <Label>근막케어, 컨디셔닝 전문강사</Label>
                        <Label>웨이트트레이닝 운동처방사</Label>
                        <Label>바디프로필 전문강사</Label>
                    </div>
                </div>
            </div>
            <div className="m-auto ">
                <img alt="권순목" src={Instructor4} />
            </div>
        </div>
        </>
    )
}

export default Instructor