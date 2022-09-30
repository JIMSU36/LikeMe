import React from "react";
import {
    Label,
} from "reactstrap";

const TypeDiet = () => {
    return(
        <>
        <div className="w-full h-full ">
            <div className="w-[50vw] mb-14 py-10 m-auto typo grid grid-cols-4 font-bold">
                <Label className="text-sm text-left ml-[20%]">#음식섭취비만</Label>
                <Label className="text-xl text-left -ml-20 mt-4">#신경성 / 스트레스성 비만</Label>
                <Label className="text-3xl text-left w-[120%]">#글루텐_과다형_비만</Label>
                <Label className="text-lg text-center ">#대사성_비만</Label>
                <Label className="text-xl text-left mt-10">#정맥_순환_장애형_비만</Label>
                <Label className="text-4xl text-left w-[120%] mt-2">#비활동성_비만</Label>
                <Label className="text-base text-left text-center">#통증성_비만</Label>
                <Label className="text-5xl text-left -ml-16 mt-4">#마른_비만</Label>
            </div>

            <div className="w-[50vw] m-auto h-full py-12">
                <div className="text-left w-full">
                    <Label className="font-bold text-3xl text-[#93AEF9] after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[31vw] after:inline-block after:align-middle after:ml-6">어떤 사람이 하면 좋을까?</Label>
                </div>
                <div className="flex-col flex text-left py-10 mt-10 text-lg font-semibold space-y-4">
                    <span>- 맞지 않는 다이어트로 힘들게 뺏다, 쪘다. 반복의 악순환을 겪으시는 분.</span>
                    <span>- 잠깐 반짝하고 그만둘 것이 아닌 지속해서 나에게 적합한 습관 다이어트를 몸에 익히고 싶으신 분.</span>
                    <span>- 운동도 하고 음식량도 적게 먹는데 살이 잘 빠지지 않는 분.</span>
                    <span>- 복부비만으로 미용적으로나 건강 쪽으로 고생하고 있으신 분.</span>
                    <span>- 자율신경계 시스템이 깨져 기분 조절이나 불면증으로 힘드신 분.</span>
                    <span>- 갑상선이 안 좋으시거나 림프순환 정맥순환장애로, 많이 부으시는 분.</span>
                    <span>- 수험생이나 결혼 입시 등을 앞두고 급찐급빠하시는 분.</span>
                    <span>- 다이어트는 그때뿐 항상 요요로 제자리걸음 하시는 분.</span>
                </div>

                <div className="text-left w-full py-20">
                    <Label className="font-bold text-3xl text-[#93AEF9] before:h-[4px] before:content-[' '] before:bg-[#93AEF9] before:w-[35vw] before:inline-block before:align-middle before:mr-4  after:h-[4px] after:content-[' '] after:bg-[#93AEF9] after:w-[7vw] after:inline-block after:align-middle after:ml-4">프로세스</Label>
                </div>
                <div className="flex-col flex text-left text-lg font-semibold space-y-4">
                    <Label>여성 회원</Label>
                    <span className="text-base font-normal pl-4">
                        필라테스를 기반 코어 운동과 맨몸 웨이트 트레이닝으로 체형교정 및 체지방 감량 목적을 둔 운동 방법을 알려드립니다
                    </span>
                    <Label className="pt-6">남성 회원</Label>
                    <span className="text-base font-normal pl-4">
                        중량 웨이트 트레이닝과 코어 운동을 병행하여 근력 향상 및 균형을 위한 밸런스 트레이닝을 지도해 드리고 있습니다.
                    </span>
                    {/* <table>
                        <tr>
                            <th className="w-[50vw]">여성 회원</th>
                            <th className="w-[50vw]">남성 회원</th>
                        </tr>
                        <tr className="text-sm font-normal">
                            <td className="p-4">
                                <p>필라테스를 기반 코어 운동과 맨몸 웨이트 트레이닝으로 </p>
                                <p>체형교정 및 체지방 감량 목적을 둔 운동 방법을 알려드립니다.</p>
                            </td>
                            <td className="p-4">
                                <p>중량 웨이트 트레이닝과 코어 운동을 병행하여</p>
                                <p>근력 향상 및 균형을 위한 밸런스 트레이닝을 지도해 드리고 있습니다.</p>
                            </td>
                        </tr>
                    </table> */}
                </div>
                <div className="text-right text-base pt-20">
                    <p>밴드, 짐볼, 멀티 렉, 케틀벨, 바벨, 덤벨, 스텝박스 등 소도구 및 웨이트 장비 이용.</p>
                    <p>레슨 1회에 50분간 진행. (주 3회 이상 추천)</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default TypeDiet