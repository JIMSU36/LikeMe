import React from "react";
import mainVideo from '../../assets/video/홈페이지 대문 영상2.mp4';
import ReactPlayer from 'react-player'

const Video = () => {
    return(
        <>
        <div class="-mt-[10vh] h-[113vh]">
            <ReactPlayer
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