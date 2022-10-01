import React, { useCallback, useState } from "react"
import ImageViewer from 'react-simple-image-viewer';

import CoCop2 from '../../assets/images/협력업체2.png';
import CoCop3 from '../../assets/images/협력업체3.jpg';
import CoCop4 from '../../assets/images/협력업체4.jpg';

const CopCompany = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = [
        CoCop2,
        CoCop3,
        CoCop4,
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

      
    return(
        <>
        <div className="w-[70vw] h-full m-auto grid md:grid-cols-3 grid-cols-1 gap-12 ">
            {images.map((src, index) => (
                <img
                    src={ src }
                    onClick={ () => openImageViewer(index) }
                    key={ index }
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>

        </>
    )
}

export default CopCompany