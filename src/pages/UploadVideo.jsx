import React, { useRef, useState } from "react";
import Videos from "../components/Videos/Videos";
import { UploadOutlined } from "@ant-design/icons";

import "./UploadVideo.scss";
import { storage } from "../firebase";
import logo from "../assets/logo.png";
import { Button, Upload } from "antd";
function UploadVideo() {
  const videoRef = useRef(null);
  const inputRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [urlVideo, setUrlVideo] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const file = inputRef.current.files[0];

    let storageRef = storage.ref(`tangphuc/${file.name}`);
    storageRef.put(file).then(() => {});
  }
  /*  function handleSubmit(e) {
    var listRef = storage.ref("phanh18804");
    listRef.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          console.log(url);
        });
      });
    });

    e.preventDefault();
  } */
  function handleChange1(e) {
    if (!e) {
      return;
    }

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      setUrlVideo(e.target.result);
      setShowVideo(true);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="upload-video">
      <div className="upload-bg">
        {!showVideo ? (
          <img src={logo} alt="" />
        ) : (
          <video
            src={urlVideo}
            loop
            ref={videoRef}
            onClick={onVideoPress}
            alt=""
          />
        )}
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="upload-content">
          <UploadOutlined className="upload-icon" />
          <p className="text-center">Choose video and preview before upload</p>
          <input
            className="btn-upload"
            name="video"
            type="file"
            id="videoFile"
            accept="video/*"
            ref={inputRef}
            onChange={handleChange1}
          />
        </div>
        <div className="upload-submit">
          <input type="submit" value="Up load" className=" btn btn-solid" />
        </div>
      </form>

      {/* <Videos src={urlVideo} like={0} share={0} comment={0}></Videos> */}
    </div>
  );
}

export default UploadVideo;
