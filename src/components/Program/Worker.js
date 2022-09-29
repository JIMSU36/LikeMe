import React from "react";
import {
    Label,
} from "reactstrap";


const Worker = () => {
    return(
        <>
        <div className="w-full h-full ">
            <div className="w-[50vw] mb-14 py-10 m-auto typo grid grid-cols-6 font-bold">
            <Label className="text-sm text-left ml-[20%]">#직업병_굿바이</Label>
                <Label className="text-xl text-left -ml-10 mt-6">#직업별_자세분석</Label>
                <Label className="text-2xl text-left -ml-14 -mt-4 w-[150%]">#일자목타파</Label>
                <Label className="text-lg text-center ">#어깨뭉침</Label>
                <Label className="text-xl text-left -ml-20 mt-8 mb-4">#잦은두통</Label>
                <Label className="text-3xl text-left w-[150%] -ml-16 mt-2">#전형적_현대인</Label>
                <Label className="text-base text-left text-center">#맨날_만성피로</Label>
                <Label className="text-xl text-left w-[200%] mt-4">#자세가_틀어진_몸</Label>
                <Label className="text-3xl w-[300%] text-left ml-32">#피로에_약한_몸</Label>
            </div>

            <div className="w-[50vw] m-auto h-full py-12">
                <div className="text-left w-full">
                    <Label className="font-bold text-3xl after:h-[4px] after:content-[' '] after:bg-black after:w-[31vw] after:inline-block after:align-middle after:ml-4">어떤 사람이 하면 좋을까?</Label>
                </div>
                <div className="flex-col flex text-left py-10 mt-10 text-lg font-semibold space-y-4">
                    <span>- 오랫동안 앉아있어서 목, 허리가 무거우신 직장인.</span>
                    <span>- 장시간 운전하시면서 쌓여진 피로감이 크신 분.</span>
                    <span>- 몸에 활력이 떨어지신 직장인.</span>
                    <span>- 활동량이 적으신 분.</span>
                    <span>- 오래 서계시거나 걸으면서 자세 불균형이 오신 분.</span>
                </div>

                <div className="text-left w-full py-20">
                    <Label className="font-bold text-3xl before:h-[4px] before:content-[' '] before:bg-black before:w-[35vw] before:inline-block before:align-middle before:mr-4  after:h-[4px] after:content-[' '] after:bg-black after:w-[7vw] after:inline-block after:align-middle after:ml-4">프로세스</Label>
                </div>
                <div className="flex flex-col text-left ">
                    <Label className="font-bold text-xl">누적된 피로감과 통증으로 더 큰 질병이 찾아오지 않도록</Label>
                    <Label className="font-bold text-xl">직업 유형별로 나누어 이완 프로그램을 진행합니다.</Label>

                    <div className="flex flex-col py-12 space-y-2 font-semibold">
                        <Label className="font-bold text-xl">&lt; 직업 유형 분류 &gt;</Label>
                        <p>1. 선 자세 - 족저근막염, 허리, 목 주변 근막, 근육 위주로 젖산, 통증물질 침착(교사, 강사, 경호원, 판매업 등).</p>
                        <p>2. 앉은 자세 - 가벼운 목, 허리 디스크, 굽은 어깨, 일자목, 거북목, 일자 허리(공무원, 회사원, IT업계, 운전관련, 학생, 연구원 등).</p>
                    </div>

                    <div className="text-right text-base pt-12">
                        <p>밴드, 짐볼, 덤벨, 필라테스 기구 이용.</p>
                        <p>레슨 1회에 50분간 진행. (주 2회 이상 추천)</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Worker;