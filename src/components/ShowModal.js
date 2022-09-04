import React from "react"
import {
    Label,
    Button,
    Table,
} from "reactstrap";
import { BiMap, BiX } from "react-icons/bi";

const ShowModal = (props) => {
    const { open, close, data } = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
                <header className="flex p-4">
                    <div className="flex">
                        <BiMap size={40} className="mr-2"/>
                        <Label className="leading-[40px] font-bold text-2xl">{data.label}</Label>
                    </div>
                    <div className="ml-auto">
                        <Button className="close" onClick={close}>
                            <BiX size={40} />
                        </Button>
                    </div>
                </header>
                <main className="px-4">
                    <div className="border h-[30vh]">
                    </div>
                    <div className="w-full mt-6">
                        <Table className="w-full h-[25vh]">
                            <tr className="border-y-2 ">
                                <td className="w-[20%] font-bold border-r">지점명</td>
                                <td className="text-left px-4">{data.label}</td>
                            </tr>
                            <tr className="border-y-2">
                                <td className="w-[20%] font-bold border-r">전화번호</td>
                                <td className="text-left px-4">{data.tel}</td>
                            </tr>
                            <tr className="border-y-2">
                                <td className="w-[20%] font-bold border-r">주소</td>
                                <td className="text-left px-4">{data.address}</td>
                            </tr>
                            <tr className="border-y-2">
                                <td className="w-[20%] font-bold border-r">운영시간</td>
                                <td className="text-left px-4">{data.open}</td>
                            </tr>
                            <tr className="border-y-2">
                                <td className="w-[20%] font-bold border-r">주차정보</td>
                                <td className="text-left px-4"></td>
                            </tr>
                        </Table>
                    </div>
                </main>
                <footer className="p-4 space-x-4">
                    <Button className="close px-4 py-2">
                        카톡상담
                    </Button>
                    <Button className="close px-4 py-2">
                        네이버 예약
                    </Button>
                    <Button className="close px-4 py-2">
                        문의하기
                    </Button>
                </footer>
            </section>
        ) : null}
        </div>
    )
}
export default ShowModal