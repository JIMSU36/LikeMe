import React from "react";
import mainVideo from '../../assets/images/mainVideo.mp4';
import ReactPlayer from 'react-player'

const Video = () => {
    return(
        <>
        <div class="-mt-[10vh] h-[113vh]">
            <ReactPlayer
                className=""
                width={'100%'}
                height={'100%'}
                url={mainVideo}
                playing={true}
                muted={true}
                controls={false}
                loop={true}
            />
        </div>
        </>
    )
};

export default Video;