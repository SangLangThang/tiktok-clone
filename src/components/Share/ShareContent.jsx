import { Carousel, Divider } from "antd";
import React from "react";
import fb from "../../assets/fb.png";
import mess from "../../assets/mess.png";
import sms from "../../assets/sms.png";
import telegram from "../../assets/telegram.png";
import zalo from "../../assets/zalo.png";
import "./ShareContent.scss";

function ShareContent() {
  const settings = {
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const carouselData1 = [
    { src: `${mess}`, name: "Messenger", i: "" },
    { src: `${telegram}`, name: "Tin nhắn", i: "" },
    { src: `${fb}`, name: "Facebook", i: "" },
    { src: `${zalo}`, name: "Zalo", i: "" },
    { src: `${sms}`, name: "SMS", i: "" },
    { src: "", name: "Sao chép liên kết", i: "bx-link-alt", color: "purple-6" },
    {
      src: "",
      name: "Khác",
      i: "bx-dots-horizontal-rounded",
      color: "geekblue-4",
    },
  ];
  const carouselData2 = [
    { src: "", i: "bx-flag", name: "Báo cáo" },
    { src: "", i: "bx-x", name: "Không quan tâm" },
    { src: "", i: "bx-download", name: "Lưu video" },
    { src: "", i: "bx-check-double", name: "Duet" },
    { src: "", i: "bxs-bookmark-heart", name: "Thêm vào yêu thích" },
    { src: "", i: "bxs-bullseye", name: "Live Photo" },
    { src: "", i: "bxs-file-gif", name: "Chia sẻ dưới dạng GIF" },
  ];
  return (
    <div>
      <Carousel {...settings}>
        {carouselData1.map((data) => (
          <div key={data.name}>
            <div className="share-content">
              <div className={`share-item ${data.color}`}>
                {data.src === "" && <i className={`bx ${data.i}`}></i>}
                {data.i === "" && <img src={data.src} alt="" />}
              </div>
              <span>{data.name}</span>
            </div>
          </div>
        ))}
      </Carousel>
      <Divider />
      <Carousel {...settings}>
        {carouselData2.map((data) => (
          <div key={data.name}>
            <div className="share-content">
              <div className={`share-item gray-4 `}>
                {data.src === "" && <i className={`bx ${data.i}`}></i>}
                {data.i === "" && <img src={data.src} alt="" />}
              </div>
              <span>{data.name}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ShareContent;
