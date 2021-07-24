import { Col, notification, Row, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import listVideoApi from "../api/listVideoApi";
import VideoMini from "../components/Videos/VideoMini";
import { useAuth } from "../contexts/AuthContext";
import "./Account.scss";
const { Title } = Typography;
function Account() {
  const { currentUser, logout } = useAuth();
  const [playing, setPlaying] = useState(false);
  const history = useHistory();
  const [list, setList] = useState([]);
  const [fetchFinish, setFetchFinish] = useState(false);
  const openNotification = (placement) => {
    notification.open({
      message: "User Log Out Finish",
      duration: 2,
      placement,
    });
  };

  useEffect(() => {
    const fetchListVideo = () => {
      let nickName = currentUser.email;
      nickName = nickName.slice(0, nickName.indexOf("@"));
      const response = listVideoApi.getUser(nickName);
      setList(response);
    };
    fetchListVideo();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFetchFinish(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onVideoPress = (e) => {
    if (playing) {
      e.pause();
      setPlaying(false);
    } else {
      e.play();
      setPlaying(true);
    }
  };

  async function handleLogOut() {
    try {
      await logout();
      //openNotification("topLeft");
      history.replace("/sign");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="user__container">
      <div className="user__exit" onClick={handleLogOut}>
        <i class="bx bx-exit"></i>
        <span className="user__exit-text">Log Out</span>
      </div>

      <div className="user__avatar">
        <img src={list.map((list1) => list1.avatar)} alt="" />
      </div>
      <Title level={3}>{currentUser && currentUser.email}</Title>
      <div className="user__info">
        <span className="user__info-item">
          <span className="user__info-title">61</span>
          <br></br>
          <span>Đang follow</span>
        </span>
        <span className="user__info-divider"></span>
        <span className="user__info-item">
          <span className="user__info-title">61</span>
          <br></br>
          <span>Follower</span>
        </span>
      </div>

      <div className="user__videos">
        <span className="user__videos-icon">
          <i className="bx bxs-grid "></i>
        </span>
        <span className="user__videos-icon">
          <i className="bx bx-heart"></i>
        </span>
      </div>
      <div className="user__lists">
        <Row>
          {fetchFinish &&
            list.map((list1) =>
              list1.videos.map((video) => (
                <Col span={8}>
                  <div className="user__lists-item">
                    <VideoMini src={video.src}></VideoMini>
                  </div>
                </Col>
              ))
            )}
        </Row>
      </div>
    </div>
  );
}

export default Account;
