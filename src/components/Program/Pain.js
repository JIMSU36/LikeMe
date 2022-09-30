import React from "react";
import {
    Label,
} from "reactstrap";


const Pain = () => {
    return(
        <>
        <div className="w-full h-full ">
            <div className="w-[50vw] mb-14 py-10 m-auto typo grid grid-cols-6 font-bold">
            <Label className="text-sm text-left ml-[20%]">#메디컬재활_특화</Label>
                <Label className="text-xl text-left -ml-10 mt-6">#재활_필라테스</Label>
                <Label className="text-2xl text-left -ml-14 -mt-4 w-[150%]">#재활_근력강화</Label>
                <Label className="text-lg text-center ">#움직임_재학습</Label>
                <Label className="text-xl text-left -ml-20 mt-8 mb-4">#밸런스_운동</Label>
                <Label className="text-3xl text-left w-[150%] mt-2">#자세교정</Label>
                <Label className="text-base text-left text-center">#이완프로그램</Label>
                <Label className="text-xl text-left w-[200%] mt-4">#누적된_통증_타파</Label>
                <Label className="text-3xl w-[300%] text-left ml-32">#우리엄마가_이제_허리_안아프데요</Label>
            </div>

            <div className="w-[50vw] m-auto h-full py-12">
                <div className="text-left w-full">
                    <Label className="font-bold text-3xl text-[#93AEF9] after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[31vw] after:inline-block after:align-middle after:ml-6">어떤 사람이 하면 좋을까?</Label>
                </div>
                <div className="flex-col flex text-left py-10 mt-10 text-lg font-semibold space-y-4">
                    <span>- 병원을 가도 이상은 없다고 하는데 계속 이유 없이 아프신 분.</span>
                    <span>- 고질적인 허리, 목 통증이 있으신 분.</span>
                    <span>- 일상생활 중 조금만 앉아있거나 움직여도 아프신 분.</span>
                    <span>- 디스크나 협착증 등을 진단 받으시고 꾸준한 관리가 필요하신 분.</span>
                    <span>- 다치시거나 수술 이후 재활이 필요하신 분.</span>
                </div>


                <div className="text-left w-full py-20">
                    <Label className="font-bold text-3xl text-[#93AEF9] before:h-[4px] before:content-[' '] before:bg-[#93AEF9] before:w-[35vw] before:inline-block before:align-middle before:mr-4  after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[7vw] after:inline-block after:align-middle after:ml-4">프로세스</Label>
                </div>
                <div className="flex flex-col text-left ">
                    <Label className="font-bold text-xl">재활 필라테스와 매트 운동으로 움직임을 재학습합니다.</Label>

                    <div className="flex flex-col py-12 space-y-2 font-semibold">
                        <p>1. 반복적으로 아픈 관절 부위에서 해결해야 하는 첫 번째 요소를 배웁니다.</p>
                        <p>2. 통증 분류와 원인에 따른 스트레칭과 근력, 밸런스 운동을 진행합니다.</p>
                    </div>

                    <div className="flex flex-col py-12 space-y-2 font-semibold">
                        <Label className="font-bold text-xl">&lt; 통증 원인 분류 &gt;</Label>
                        <p>1. 과사용성 - 근막이완, 길항근/협력근 강화, 효율적 움직임 교육.</p>
                        <p>2. 저가동성 - 근에너지테크닉, 스트레칭.</p>
                        <p>3. 근저하성(과가동성) - 열린사슬운동에서 닫힌사슬운동까지의 단계.</p>
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

export default Pain;