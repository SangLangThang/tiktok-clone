import { Form, Input, message } from "antd";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import fb from "../assets/fb.png";
import mess from "../assets/mess.png";
import telegram from "../assets/telegram.png";
import zalo from "../assets/zalo.png";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./Sign.scss";

function Sign() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }
  const info = () => {
    message.info("Username have exit");
  };
  const [mode, setMode] = useState("");
  const changeMode = () => {
    if (mode === "") {
      setMode("show");
    } else {
      setMode("");
    }
  };
  const onFinish = (e) => {
    //checkDupMember(e);
  };

  const history = useHistory();
  function checkDupMember(e) {
    db.collection("members")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id !== e.account) {
            db.collection("members").doc(`${e.account}`).set(e);
            history.replace("/about");
          } else {
            info();
          }
        });
      });
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className={`form-signIn ${mode}`}>
          <Form
            className="sign-in-form"
            name="signin"
            onFinish={checkDupMember}
          >
            <h2 className="title">Log in</h2>
            <div className="input-field">
              <i className="bx bx-user"></i>
              <Form.Item name="account">
                <Input placeholder="Username" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <Form.Item name="password">
                <Input type="password" placeholder="Password" />
              </Form.Item>
            </div>

            <p onClick={changeMode} className="bold">
              Register Now
            </p>
            <input type="submit" value="Login" className=" btn btn-solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <div className="social-item">
                <img src={telegram} alt="" />
              </div>
              <div className="social-item">
                <img src={fb} alt="" />
              </div>
              <div className="social-item">
                <img src={zalo} alt="" />
              </div>
              <div className="social-item">
                <img src={mess} alt="" />
              </div>
            </div>
          </Form>
        </div>
        <div className={`form-signUp ${mode}`}>
          <Form onFinish={onFinish} className="sign-up-form" name="signup">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="bx bx-user"></i>
              <Form.Item name="account">
                <Input placeholder="Username" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <Form.Item name="password">
                <Input type="password" placeholder="Password" />
              </Form.Item>
            </div>

            <input type="submit" value="Sign Up" className=" btn btn-solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <div className="social-item">
                <img src={telegram} alt="" />
              </div>
              <div className="social-item">
                <img src={fb} alt="" />
              </div>
              <div className="social-item">
                <img src={zalo} alt="" />
              </div>
              <div className="social-item">
                <img src={mess} alt="" />
              </div>
            </div>
          </Form>
        </div>
        {/* Form sign up */}
      </div>
    </div>
  );
}

export default Sign;
