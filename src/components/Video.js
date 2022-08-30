import React from "react";
import mainVideo from '../assets/images/mainVideo.mp4';
import thumb from '../assets/images/mainVideo_thumb.jpg';
import ReactPlayer from 'react-player'

const Video = () => {
    return(
        <>
        <div class="-mt-[10vh] h-[113Rvh]">
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