import { Alert, notification, Form, message } from "antd";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import fb from "../assets/fb.png";
import mess from "../assets/mess.png";
import telegram from "../assets/telegram.png";
import zalo from "../assets/zalo.png";
import { useAuth } from "../contexts/AuthContext";
import { IssuesCloseOutlined } from "@ant-design/icons";
import "./Sign.scss";

function Sign() {
  const styleFinish = {
    backgroundColor: "#1890ff",
    color: " white",
  };

  const { signup, currentUser, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(["", "", ""]);
  const history = useHistory();
  const openNotification = (mess, type) => {
    notification.open({
      message: mess,
      className: "custom-class",
      style: { ...type },
      duration: 2,
      placement: "topLeft",
      onClose: handleClose,
    });
  };

  function handleClose() {
    history.replace("/info");
  }
  const error = (text) => {
    message.error(text);
  };
  async function onSignUp(values) {
    console.log(values);
    if (values.password !== values.confirmpassword) {
      setAlert(["signup", "error", "Password do not match"]);
      return;
    }
    try {
      setLoading(true); // disable button submit when create account
      await signup(values.email, values.password);
      openNotification("Sign Up Finish, Switch User Page", styleFinish);
    } catch (e) {
      setAlert(["signup", "error", e.message]);
      console.log(e.message);
    }
    setLoading(false);
  }
  async function onLogIn(values) {
    console.log(values);
    try {
      setLoading(true); // disable button submit when create account
      await login(values.email, values.password);
      openNotification("Log In Finish", styleFinish);
    } catch (e) {
      setAlert(["login", "error", e.message]);
    }
    setLoading(false);
  }
  const [mode, setMode] = useState("show-logIn");
  const changeMode = () => {
    if (mode === "show-logIn") {
      setMode("show-signUp");
    } else {
      setMode("show-logIn");
    }
  };

  return (
    <div className="container">
      <div className={`form-container ${mode}`}>
        <div className="form-signIn">
          <Form className="sign-in-form" name="signin" onFinish={onLogIn}>
            <h2 className="title">Log in</h2>
            <div className="form-alert">
              {alert[0] === "login" && (
                <Alert closable message={alert[2]} type={alert[1]} />
              )}
            </div>
            <div className="input-field">
              <i className="bx bx-user"></i>
              <Form.Item
                name="email"
                className="input-item"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <input type="email" placeholder="Email" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <Form.Item
                className="input-item"
                name="password"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <input type="password" placeholder="Password" />
              </Form.Item>
            </div>

            <p onClick={changeMode} className="bold social-text">
              Need an account? <span className="input-link">Sign up</span>
            </p>
            <input
              type="submit"
              value="Login"
              className=" btn btn-solid"
              disabled={loading}
            />
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
        <div className="form-signUp">
          <Form onFinish={onSignUp} className="sign-up-form" name="signup">
            <h2 className="title">Sign up</h2>
            {/* {JSON.stringify(currentUser)} : json of current user */}
            <div className="form-alert">
              {alert[0] === "signup" && (
                <Alert closable message={alert[2]} type={alert[1]} />
              )}
            </div>

            <div className="input-field">
              <i className="bx bx-user"></i>
              <Form.Item
                className="input-item"
                name="email"
                rules={[{ required: true, message: "Please input your email" }]}
              >
                <input placeholder="Email" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <Form.Item
                className="input-item"
                name="password"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <input type="password" placeholder="Password" />
              </Form.Item>
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <Form.Item
                className="input-item"
                name="confirmpassword"
                rules={[{ required: true, message: "Please confirm password" }]}
              >
                <input type="password" placeholder="Confirm Password" />
              </Form.Item>
            </div>
            <p onClick={changeMode} className="bold social-text">
              Already have account?
              <span className="input-link">Log in</span>
            </p>
            <input
              type="submit"
              value="Sign Up"
              className=" btn btn-solid"
              disabled={loading}
            />
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
