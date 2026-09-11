import React, { useRef } from "react";

function VideoPlayer() {

    const videoRef = useRef();

    function playVideo() {

        videoRef.current.play();

    }

    function pauseVideo() {

        videoRef.current.pause();

    }

    return (

        <div>

            <h2>Employee Training Video</h2>

            <video
                ref={videoRef}
                width="500"
                controls
            >

               <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                />

                Your browser does not support video.

            </video>

            <br />
            <br />

            <button onClick={playVideo}>
                Play
            </button>

            <button onClick={pauseVideo}>
                Pause
            </button>

        </div>
    );
}

export default VideoPlayer;