import React from "react";
import ReactPlayer from 'react-player'
import mainVideo from '../../assets/video/main.mp4'

const Video = () => {
    return(
        <>
        <div className="relative -mt-[10vh] h-[113vh]">
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