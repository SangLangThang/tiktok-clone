import { Progress } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="video__process">
        <Progress
          percent={0}
          type="line"
          strokeWidth={2}
          showInfo={false}
          strokeColor="white"
          trailColor="rgb(191 191 191)"
        />
      </div>
      <ul>
        <li>
          <Link to="/" className="footer__link">
            <i className="bx bx-home "></i>
            <span> Trang chủ</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer__link">
            <i className="bx bx-search"></i>
            <span>Khám phá</span>
          </Link>
        </li>
        <li>
          <Link to="/upload" className="footer__link">
            <i className="bx bx-tv"></i>
            <span>+</span>
          </Link>
        </li>
        <li>
          <Link to="/mess" className="footer__link">
            <i className="bx bxs-message-alt-minus"></i>
            <span>Hộp thư</span>
          </Link>
        </li>
        <li>
          <Link to="/user" className="footer__link">
            <i className="bx bx-user"></i>
            <span>Tôi</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
