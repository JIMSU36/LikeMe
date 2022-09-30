import React from "react";
import {
    Label,
} from "reactstrap";


const Child = () => {
    return(
        <>
        <div className="w-full h-full ">
            <div className="w-[50vw] mb-14 py-10 m-auto typo grid grid-cols-6 font-bold">
                <Label className="text-sm text-left ml-[20%]">#키성장</Label>
                <Label className="text-xl text-left -ml-10 mt-6">#성조숙증</Label>
                <Label className="text-2xl text-left -ml-14 -mt-4 ">#체력관리</Label>
                <Label className="text-lg text-center ">#짧고_굵게_운동</Label>
                <Label className="text-xl text-left -ml-20 mt-8 mb-4">#최상의_컨디션</Label>
                <Label className="text-3xl text-left w-[150%] mt-2">#집중력_업</Label>
                <Label className="text-base text-left text-center">#다리교정</Label>
                <Label className="text-base text-left text-center">#뇌과학</Label>
                <Label className="text-xl text-left w-[200%]">#뇌_신경가소성_이용</Label>
                <Label className="text-3xl w-[300%] text-left ml-[120%]">#균형잡기</Label>
            </div>

            <div className="w-[50vw] m-auto h-full py-12">
                <div className="text-left w-full">
                    <Label className="font-bold text-3xl text-[#93AEF9] after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[31vw] after:inline-block after:align-middle after:ml-6">어떤 사람이 하면 좋을까?</Label>
                </div>
                <div className="flex-col flex text-left py-10 mt-10 text-lg font-semibold space-y-4">
                    <span>- 점점 자세가 안 좋아지고, 학업으로 인해 더 악순환 속에 있는 청소년.</span>
                    <span>- 공부하면서 목, 허리가 아픈 청소년.</span>
                    <span>- 키 때문에 고민 중인 청소년.</span>
                    <span>- 체력이 떨어지고 소화불량으로 힘든 청소년.</span>
                </div>

                <div className="text-left w-full py-20">
                    <Label className="font-bold text-3xl text-[#93AEF9] before:h-[4px] before:content-[' '] before:bg-[#93AEF9] before:w-[35vw] before:inline-block before:align-middle before:mr-4  after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[7vw] after:inline-block after:align-middle after:ml-4">프로세스</Label>
                </div>
                <div className="flex flex-col text-left ">
                    <Label className="font-bold text-xl">다양한 시각적 교보재 사용과 신체적 활동을 유도하면서 점점 변형되는 척추와</Label>
                    <Label className="font-bold text-xl">앉아있는 자세 때문에 아픈 몸들을 위한 부분적 근력운동과 필라테스 결합으로 진행이 됩니다.</Label>

                  
                    <div className="text-right text-base pt-12">
                        <p>밴드, 짐볼, 스텝박스, 필라테스 기구 이용.</p>
                        <p>레슨 1회에 50분간 진행. (주 2회 이상 추천)</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Child;