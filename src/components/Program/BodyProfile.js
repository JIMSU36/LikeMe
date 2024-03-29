import React from "react";
import {
    Label,
} from "reactstrap";

const BodyProfile = () => {
    return(
        <>
        {/* pc화면 */}
        <div className="md:block hidden w-full h-full ">
            <div className="w-[50vw] mb-14 py-10 m-auto typo grid grid-cols-6 font-bold">
                <Label className="text-sm text-left ml-[20%]">#카톡프사_30년치</Label>
                <Label className="text-xl text-left -ml-10 mt-6">#바디쉐이프_디자인</Label>
                <Label className="text-2xl text-left -ml-14 -mt-4 w-[150%]">#근성장촉진_테라피</Label>
                <Label className="text-lg text-center ">#추억영상_제공</Label>
                <Label className="text-xl text-left -ml-20 mt-8 mb-4">#개인체형_특성별_분류</Label>
                <Label className="text-3xl text-left w-[150%] mt-2">#전문포징_훈련</Label>
                <Label className="text-base text-left text-center">#단점_커버</Label>
                <Label className="text-xl text-left w-[200%] mt-4">#촬영_서포트_전폭_지원</Label>
                <Label className="text-3xl w-[300%] text-left ml-32">#최적의_근육_만드는_비법_대공개</Label>
            </div>

            <div className="w-[50vw] m-auto h-full py-12">
                <div className="text-left w-full">
                    <Label className="font-bold text-3xl text-[#93AEF9] after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[31vw] after:inline-block after:align-middle after:ml-6">어떤 사람이 하면 좋을까?</Label>
                </div>
                <div className="flex-col flex text-left py-10 mt-10 text-lg font-semibold space-y-4">
                    <span>- 라이크미 스튜디오에서 최고의 가성비로 두 마리 토끼를 잡으실 분.</span>
                    <span>- 진짜 일생일대의 추억을 만들어보고 싶으신 분.</span>
                    <span>- 두고두고 자랑스러운 나의 프로필을 완성하고 싶으신 분.</span>
                    <span>- 큰 성취감을 가져보고 싶으신 분.</span>
                    <span>- 패션의 완성으로 찐 옷발을 뽐내고 싶으신 분.</span>
                    <span>- 또 다른 재미를 가져보고 싶으신 분.</span>
                </div>

                <div className="text-left w-full py-20">
                    <Label className="font-bold text-3xl text-[#93AEF9] before:h-[4px] before:content-[' '] before:bg-[#93AEF9] before:w-[35vw] before:inline-block before:align-middle before:mr-4  after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[7vw] after:inline-block after:align-middle after:ml-4">프로세스</Label>
                </div>
                <div className="flex flex-col text-left ">
                    <Label className="font-bold text-xl">살이 잘 찌는지, 상체가 더 긴지 개인 체형 특성별 분류로</Label>
                    <Label className="font-bold text-xl">자신의 단점을 커버하는 몸을 만들어 드립니다.</Label>

                    <div className="flex flex-col py-12 space-y-2 font-semibold">
                        <p>1. 실패를 줄이기 위해 개인, 부위별 휴식시간을 고려한 최적의 근육을 만드는 방법을 배웁니다.</p>
                        <p>2. 운동과정 영상촬영, 촬영 서포트 지원, 바디프로필 전문 포징 훈련을 하여 가장 아름다운 순간을 만들어 드립니다.</p>
                    </div>

                    <div className="text-right text-base pt-12">
                        <p>밴드, 짐볼, 멀티 렉, 케틀벨, 바벨, 덤벨, 스텝박스 등 소도구 및 웨이트 장비 이용.</p>
                        <p>레슨 1회에 50분간 진행. (주 3회 이상 추천)</p>
                    </div>
                </div>
            </div>
        </div>


        {/* 모바일 화면 */}
        <div className="md:hidden block w-full h-full ">
            <div className="w-[80vw] m-auto h-full py-10">
                <div className="text-left w-full">
                    <Label className="font-bold text-xl text-[#93AEF9]">어떤 사람이 하면 좋을까?</Label>
                    <hr className='w-[40vw] h-1 bg-[#93AEF9] border-none'/>
                </div>
            </div>
            <div className="flex-col flex text-left text-sm font-semibold">
                <p>- 라이크미 스튜디오에서 최고의 가성비로</p>
                <p className="indent-3">두 마리 토끼를 잡으실 분.</p>
                <p className="mt-2">- 진짜 일생일대의 추억을 만들어보고 싶으신 분.</p>
                <p className="mt-2">- 두고두고 자랑스러운 </p>
                <p className="indent-3">나의 프로필을 완성하고 싶으신 분.</p>
                <p className="mt-2">-  큰 성취감을 가져보고 싶으신 분.</p>
                <p className="mt-2">- 패션의 완성으로 찐 옷발을 뽐내고 싶으신 분.</p>
                <p className="mt-2">- 또 다른 재미를 가져보고 싶으신 분.</p>
            </div>

            <div className="w-[80vw] m-auto h-full py-10">
                <div className="text-left w-full mt-12">
                    <Label className="font-bold text-xl text-[#93AEF9]">프로세스</Label>
                    <hr className='w-[40vw] h-1 bg-[#93AEF9] border-none'/>
                </div>
            </div>
            <div className="flex-col flex text-left font-semibold">
                <p>살이 잘 찌는지, 상체가 더 긴지</p>
                <p>개인 체형 특성별 분류로,</p>
                <p>단점을 커버하는 몸을 만들어 드립니다.</p>

                <div className="flex flex-col py-12 font-semibold text-sm">
                    <p>1. 실패를 줄이기 위해 개인,</p>
                    <p className="indent-4">부위별 휴식시간을 고려한 </p>
                    <p className="indent-4">최적의 근육을 만드는 방법을 배웁니다.</p>
                    <p className="mt-4">2. 운동과정 영상촬영, 촬영 서포트 지원, </p>
                    <p className="indent-4">바디프로필 전문 포징 훈련을 하여 </p>
                    <p className="indent-4">가장 아름다운 순간을 만들어 드립니다.</p>
                </div>

                <div className="text-right text-xs pt-20">
                    <p>밴드, 짐볼, 멀티 렉, 케틀벨, 바벨, 덤벨, 스텝박스 등 </p>
                    <p>소도구 및 웨이트 장비 이용.</p>
                    <p>레슨 1회에 50분간 진행. (주 3회 이상 추천)</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default BodyProfile;