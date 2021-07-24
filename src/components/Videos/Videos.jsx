import { Button, Divider, Drawer } from "antd";
import React, { useRef, useState } from "react";
import Ticker from "react-ticker";
import ShareContent from "../Share/ShareContent";
import "./Videos.scss";

function Videos(props) {
  const { src, like, comment, share, user, content, nameMusic, avatar } = props;
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [userLike, setUserLike] = useState(0);
  const [iconUserLike, setIconUserLike] = useState("");
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

  const handleLike = () => {
    if (userLike === 0) {
      setIconUserLike("red");
      setUserLike(1);
    } else {
      setIconUserLike("");
      setUserLike(0);
    }
  };
  return (
    <div>
      <div className="video__container">
        <video
          src={src}
          loop
          ref={videoRef}
          className="video__player"
          onClick={onVideoPress}
        ></video>
        <div className="video__header">
          <span>Đang Follow</span>
          <Divider type="vertical" />
          <span className="strong">Dành cho bạn</span>
        </div>
        <div className="video__sidebar">
          <div className="video__sidebar-avatar">
            <img className="video__sidebar-img" src={avatar} alt="" />
          </div>

          <span className="video__sidebar-item" onClick={handleLike}>
            <i className={`bx bxs-heart ${iconUserLike}`}></i>
            <span>{`${like + userLike}`}</span>
          </span>
          <span className="video__sidebar-item">
            <i class="bx bx-message-rounded-detail"></i>
            <span>{comment}</span>
          </span>
          <span
            className="video__sidebar-item"
            onClick={() => {
              setVisible(true);
            }}
          >
            <i className="bx bxs-share bx-flip-horizontal"></i>
            <span>{share}</span>
          </span>
        </div>
        <div className="video__footer">
          <div className="video__info">
            <span>{`@${user}`}</span>
            <span>{content}</span>
          </div>
          <div className="video__music">
            <i className="bx bxs-music video__music-icon"></i>
            <Ticker height={30} mode="smooth">
              {({ index }) => (
                <>
                  <p key={index}>{`@${user}-${nameMusic}`}</p>
                </>
              )}
            </Ticker>
            <div className="video__music-avatar">
              <img className="video__music-img" src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="bottom"
        closable={false}
        maskStyle={{ backgroundColor: "transparent" }}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        key="bottom"
      >
        <p className="strong text-center">Chia sẻ lên</p>
        <ShareContent></ShareContent>
        <Button
          className="gray-4"
          block
          onClick={() => {
            setVisible(false);
          }}
        >
          Hủy
        </Button>
      </Drawer>
    </div>
  );
}

export default Videos;
