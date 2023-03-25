import React from "react";
import "./Register.css";
function Register() {
  return (
    <div
      style={{
        display: "flex",
        background: 'url("assets/img/login.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        className="formLogin"
        action="action_page.php"
        style={{ border: "1px solid #ccc" }}
      >
        <div className="container">
          <h1 className="title_text">ĐĂNG KÝ</h1>
          <label for="email">
            <b>Tên đăng nhập</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập"
            name="email"
            required
          />
          <label for="email">
            <b>Số điện thoại</b>
          </label>
          <input
            type="tel"
            placeholder="Nhập số điện thoại"
            name="sdt"
            required
          />
          <div className="form_repass">
            <div className="pass">
              <label for="psw">
                <b>Mật khẩu</b>
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                name="psw"
                required
              />
            </div>

            <div className="re_pass">
              <label for="psw-repeat">
                <b>Xác nhận mật khẩu</b>
              </label>
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                name="psw-repeat"
                required
              />
            </div>
          </div>
          <label for="email">
            <b>Địa chỉ</b>
          </label>
          <input
            type="text"
            placeholder="Nhập địa chỉ"
            name="Address"
            required
          />
          <div className="clearfix">
            <button
              type="submit"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
