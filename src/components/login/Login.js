import React from "react";
import "./Login.css";

function Login() {
  return (
    <div
      style={{
        display:'flex',
        background: 'url("assets/img/login.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <form className="formLogin" action="#" method="post">
        <div className="textcontainer">
         <h1 className="titleText">ĐĂNG NHẬP</h1>
        </div>

        <div className="container">
          <label for="uname">
            <b>Tên đăng nhập</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhâp"
            name="uname"
            required
          />

          <label for="psw">
            <b>Mật khẩu</b>
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="psw"
            required
          />

          <button type="submit">Đăng nhập</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div className="login_mxh">
          <button className="fb" type="button">Facebook</button>
          <button className="gg" type="button">Google</button>
        </div>
        <div className="container">
          <span className="psw">
            Quên <a href="quenmatkhau"> Mật khẩu?</a>
          </span>
          <span className="psw">
            <a href="register">Đăng ký </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
