import React from "react"
import CoCop1 from '../../assets/images/협력업체1.jpg';
import CoCop2 from '../../assets/images/협력업체2.png';
import CoCop3 from '../../assets/images/협력업체3.jpg';
import CoCop4 from '../../assets/images/협력업체4.jpg';

const CopCompany = () => {
    return(
        <>
        <div className="w-[80vw] h-full m-auto grid grid-cols-2 gap-12 ">
            <img alt="협력업체1" src={CoCop1} />
            <img alt="협력업체2" src={CoCop2} />
            <img alt="협력업체3" src={CoCop3} />
            <img alt="협력업체4" src={CoCop4} />
        </div>

        </>
    )
}

export default CopCompany