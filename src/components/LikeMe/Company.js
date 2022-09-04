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
                <div className="w-full h-full border flex text-left">
                    <div className="ml-auto mr-[5vw] py-24">
                        <div className="">
                            <Label className="font-bold text-3xl">라이크미 소개</Label>
                        </div>
                        <div className="pt-12 flex flex-col space-y-2 text-base">
                            <span>라이크미 전문센터 홈페이지에 오신 것을 환영합니다. 안녕하세요.</span>
                            <span>몸이 불편하신 많은분들을 만나온 저희가 </span>
                            <span>스포츠의학,체육학,영양학,물리치료학의 집합소, 이곳 라이크미에서 만났습니다.</span>
                            <span>건강해지는 몸과 자신감 있는 몸을 찾을 수 있도록 도움을 주는 직업으로 똘똘 뭉쳐 </span>
                            <span>실전 경험뿐만 아니라 건강과학 과정들을 수료하고 전문적인 프로그램을 만들어 제공하고 있습니다. </span>
                            <span>사람마다 각자의 체형과 생활 패턴이 다른데요. 필라테스와 웨이트 트레이닝을 결합하여 </span>
                            <span>회원님들의 목적에 맞는 라이크미만의 운동 방법으로 수업을 지도하고 있습니다.</span>
                            <span>재활에서 바디프로필까지를 목표로 통증과 부상의 회복에서 끝나는 것이 아닌  </span>
                            <span>내 몸의 최고상태를 끌어올려 바디프로필 촬영 단계를 종착지로 도와드리고 있습니다. </span>
                            <span>웨이트 트레이닝+재활, 교정 운동+필라테스의 장점만을 살린 새로운 운동 방법을 알려드리겠습니다.  </span>
                            <span>믿고 따라오세요^^</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80vw] h-full m-auto">
                <div className="w-full h-full border flex text-left">
                    <div className="ml-[5vw] py-24">
                        <div className="flex flex-col space-y-4 text-base">
                            <div className="flex flex-col">
                                <span>'집에서 키우는 강아지라도 평생을 함께할 반려견이라 생각하고 키우는지 잡아먹으려고 키우는지 아는데</span>
                                <span>하물며, 만물의 영장인 인간이 진심으로 대하는지 아닌지를 모르겠는가?'</span>
                            </div>
                            <div className="flex flex-col">
                                <span>안녕하세요</span>
                                <span>라이크미 피트니스 솔루션 김택규 대표이사 입니다</span>
                            </div>
                            <div className="flex flex-col">
                                <span>오랜시간동안 운동레슨에 종사하면서 가장 크게 깨달은 것은</span>
                                <span>고객에게 진심을 다할 때 고객이 먼저 내 진심을 알아준다는 것입니다.</span> 
                            </div>
                            <div className="flex flex-col">
                                <span>저희 라이크미는 항상 진심으로 고객님들에게 다가설 것이고,</span>
                                <span>어떤 만족을 드릴 수 있는지 항상 더 노력하고 고민하여 발전하는</span>
                                <span>성숙한 라이크미가 되겠습니다</span>
                                <span>감사합니다</span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 space-y-4">
                            <hr className="h-2 bg-gray-400 w-[5vw]"/>
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
