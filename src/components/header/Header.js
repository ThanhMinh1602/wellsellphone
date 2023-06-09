import React from "react";

function Header() {
  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="user-menu">
              <ul>
                <li>
                  <a href="a">
                    <i className="fa fa-user"></i> My Account
                  </a>
                </li>
                <li>
                  <a href="a">
                    <i className="fa fa-heart"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <i className="fa fa-user"></i> My Cart
                  </a>
                </li>
                <li>
                  <a href="checkout.html">
                    <i className="fa fa-user"></i> Checkout
                  </a>
                </li>
                <li>
                  <a href="login">
                    <i className="fa fa-user"></i> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="header-right">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <a
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="dropdown-toggle"
                    href="a"
                  >
                    <span className="key">currency :</span>
                    <span className="value">USD </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="a">USD</a>
                    </li>
                    <li>
                      <a href="a">INR</a>
                    </li>
                    <li>
                      <a href="a">GBP</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-small">
                  <a
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="dropdown-toggle"
                    href="a"
                  >
                    <span className="key">language :</span>
                    <span className="value">English </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="a">English</a>
                    </li>
                    <li>
                      <a href="a">French</a>
                    </li>
                    <li>
                      <a href="a">German</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
