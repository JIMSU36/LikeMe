import React from "react"
import {
    Label,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";


const Company = () => {
    return(
        <>
        <div className="flex flex-col gap-y-24">
            <div className="w-[80vw] h-full m-auto">
                <div className={"company-group w-full h-full flex text-left"}>
                    <div className="ml-auto mr-[5vw] py-24">
                        <div className="flex">
                            <Label className="company-label text-3xl font-kohi">'나를 나답게'</Label>
                            <span className="my-auto mx-2">만들어 가는 길에 저희</span>
                            <Label className="company-label text-3xl font-kohi">라이크미</Label>
                            <span className="my-auto">가 동반자로 있겠습니다.</span>
                        </div>
                        <div className="pt-12 text-base">
                            <p>안녕하세요.</p>
                            <p>스포츠의학, 체육학, 영양학, 물리치료학,</p>
                            <p>당신에게 필요한 모든 전문가의 집합소 라이크미입니다.</p>
                            <p className="mt-6">건강한 몸과 자신감을 찾을 수 있도록 도움을 주는 직업들로 뭉친 라이크미의 트레이너들은,</p>
                            <p>전문적인 건강과학 교육과정들을 수료하고, 실전 경험들을 바탕으로 하여,</p>
                            <p>전문적인 프로그램을 만들어 제공하고 있습니다.</p>
                            <p className="mt-6">처음엔 통증으로 오래 걷는 것조차 덜컥 겁이 나는 분들조차도</p>
                            <p>재활에서 바디프로필촬영 단계까지 도와드리고 있습니다.</p>
                            <p className="mt-6">재활에서 바디프로필까지 어떤 목표를 향하시더라도</p>
                            <p>'나를 사랑하는', '나를 나답게' 만드는 조력자, 라이크미가 되겠습니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80vw] h-full m-auto">
                <div className="greeting w-full h-full flex text-left">
                    <div className="ml-[5vw] py-24">
                        <div className="flex flex-col space-y-8 text-base">
                            <div className="flex flex-col">
                                <span>'집에서 키우는 강아지라도 평생을 함께할 반려견이라 생각하고 키우는지 잡아먹으려고 키우는지 아는데</span>
                                <span>하물며, 만물의 영장인 인간이 진심으로 대하는지 아닌지를 모르겠는가?'</span>
                            </div>
                            <div className="flex flex-col">
                                <span>안녕하세요</span>
                                <span>라이크미 피트니스 솔루션 김택규 대표이사 입니다.</span>
                            </div>
                            <div className="flex flex-col">
                                <span>오랜시간동안 운동레슨에 종사하면서 가장 크게 깨달은 것은</span>
                                <span>고객에게 진심을 다할 때 고객이 먼저 내 진심을 알아준다는 것입니다.</span> 
                            </div>
                            <div className="flex flex-col">
                                <span>저희 라이크미는 항상 진심으로 고객님들에게 다가설 것이고,</span>
                                <span>어떤 만족을 드릴 수 있는지 항상 더 노력하고 고민하여 발전하는</span>
                                <span>성숙한 라이크미가 되겠습니다.</span>
                                <span>감사합니다.</span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 space-y-4">
                            <hr className="h-2 bg-[#93AEF9] w-[5vw]"/>
                            <Label className="font-bold text-xl">대표 김택규 올림</Label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        </>
    )
}

export default Company
