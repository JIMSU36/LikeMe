import React from "react"
import {
    Label,
} from "reactstrap";


const Company = () => {
    return(
        <>
        <div className="flex flex-col gap-y-24">
            <div className="w-[80vw] h-full m-auto">
                {/* pc화면 */}
                <div className="md:flex hidden company-group w-full h-full flex text-left">
                    <div className="ml-auto mr-[8vw] py-20">
                        <div className="flex">
                            <span className="my-auto">안녕하세요.</span>
                            <Label className="company-label text-3xl ml-2 font-kohi">라이크미</Label>
                            <span className="ml-1 my-auto">입니다.</span>
                        </div>
                        <div className="py-10 text-base">
                            <p>저희 라이크미는 고객님께서 잃었던 건강을 되찾기를 진심으로 원했기에, </p>
                            <p>진정성과 전문성을 갖춘 다양한 분야(스포츠의학, 체육학교육학, 영양학, 물리치료학)의 </p>
                            <p>전문가가 함께하게 되었습니다. </p>
                            <p className="mt-6">극심한 통증으로 운동을 시작하는 것 자체가 겁이 났던 분들도,</p>
                            <p>운동을 하다가 다쳐 트라우마가 생긴 분들도,</p>
                            <p>다이어트에 반복적으로 실패하시어 지쳐있는 분들도,</p>
                            <p>큰 병원에서 각종 치료를 받다가 해결되지 않아 힘들어하셨던 분들조차도</p>
                            <p>저희 라이크미를 만나 재활에 성공하시고</p>
                            <p>자신감을 회복하시어 바디프로필 촬영까지 완성하셨습니다.</p>
                            <p className="mt-6">재활에서 바디프로필까지!</p>
                            <p>'나를 사랑하는','나를 나답게' 만드는 </p>
                            <p>조력자 라이크미가 잃어버린 당신의 건강을 되찾아드리겠습니다.</p>
                            <p className="mt-6">감사합니다.</p>
                        </div>
                    </div>
                </div>
                {/* 모바일 화면 */}
                <div className="md:hidden company-group w-full h-full flex text-left">
                    <div className="">
                        <div className="flex flex-col">
                            <span className="my-auto">안녕하세요.</span>
                            <div className="flex mt-1">
                                <Label className="company-label text-3xl font-kohi ">라이크미</Label>
                                <span className="ml-1 my-auto">입니다.</span>
                            </div>
                        </div>
                        <div className="py-10 text-sm">
                            <p>저희 라이크미는 고객님께서 잃었던 건강을</p>
                            <p>되찾기를 진심으로 원했기에,</p>
                            <p>진정성과 전문성을 갖춘 <span className="font-bold">다양한 분야의</span></p>
                            <p className="font-bold">(스포츠의학, 체육학교육학, 영양학, 물리치료학)</p>
                            <p><span className="font-bold">전문가</span>가 함께하게 되었습니다. </p>
                            <p className="mt-6"><span className="font-bold">극심한 통증</span>으로 운동을 시작하는 것 </p>
                            <p>자체가 겁이 났던 분들도,</p>
                            <p>운동을 하다가 다쳐 트라우마가 생긴 분들도,</p>
                            <p><span className="font-bold">다이어트에 반복적으로 실패</span>하시어 </p>
                            <p>지쳐있는 분들도,</p>
                            <p>큰 병원에서 각종 치료를 받다가 해결되지 않아 </p>
                            <p>힘들어하셨던 분들조차도</p>
                            <p>저희 <span className="font-bold">라이크미</span>를 만나 <span className="font-bold">재활에 성공</span>하시고</p>
                            <p>자신감을 회복하시어 <span className="font-bold">바디프로필 촬영까지</span> </p>
                            <p>완성하셨습니다.</p>
                            <p className="mt-6 text-lg font-bold text-[#93AEF9]">재활에서 바디프로필까지!</p>
                            <p><span className="underline underline-offset-4 decoration-2 decoration-[#93AEF9]">'나를 사랑하는'</span>,<span className="underline underline-offset-4 decoration-2 decoration-[#93AEF9]">'나를 나답게'</span> 만드는 </p>
                            <p>조력자 라이크미가 </p>
                            <p>잃어버린 당신의 건강을 되찾아드리겠습니다.</p>
                            <p className="mt-6">감사합니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80vw] h-full m-auto">
                {/* pc화면 */}
                <div className="md:flex hidden greeting w-full h-full flex text-left">
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

                {/* 모바일 화면 */}
                <div className="md:hidden company-group w-full h-full flex text-left">
                    <div className="">
                        <div className="py-10 text-sm">
                            <p>'집에서 키우는 강아지라도 </p>
                            <p>평생을 함께할 반려견이라 생각하고 키우는지 </p>
                            <p>잡아먹으려고 키우는지 아는데</p>
                            <p>하물며, </p>
                            <p>만물의 영장인 인간이 </p>
                            <p>진심으로 대하는지 아닌지를 모르겠는가?'</p>

                            <p className="mt-6">안녕하세요</p>
                            <p className="font-bold text-lg">라이크미 피트니스 솔루션</p>
                            <p className="font-bold text-lg">김택규 대표이사 <span className="font-normal text-sm">입니다.</span></p>

                            <p className="mt-6">오랜시간동안 운동레슨에 종사하면서 </p>
                            <p>가장 크게 깨달은 것은</p>
                            <p className="font-bold">고객에게 진심<span className="font-normal">을 다할 때 </span></p> 
                            <p>고객이 먼저 내 진심을 알아준다는 것입니다.</p> 
                           
                            <p className="mt-6">저희 라이크미는</p>
                            <p><span className="font-bold">항상 진심으로 고객님들에게 다가설 것</span>이고,</p>
                            <p>어떤 만족을 드릴 수 있는지</p>
                            <p>항상 더 노력하고 고민하여 발전하는</p>
                            <p><span className="font-bold">성숙한 라이크미</span>가 되겠습니다.</p>
                            <p>감사합니다.</p>
                        </div>
                        <div className="flex flex-col mt-6 space-y-4">
                            <hr className="h-2 bg-[#93AEF9] w-[20vw]"/>
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
