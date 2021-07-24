import React, { useRef, useState } from "react";

function VideoMini(props) {
  const { src } = props;

  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    console.log(videoRef.current.duration);
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div>
      <video
        src={src}
        loop
        ref={videoRef}
        onClick={onVideoPress}
        className="user__lists-video"
      ></video>
    </div>
  );
}

export default VideoMini;
