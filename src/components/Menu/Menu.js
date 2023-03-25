import React from "react";
import './Menu.css';
function Menu() {
  return (
    <>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{width:'30%'}}>
              <div className="logo">
                <h1>
                  <a href="/home">
                    <img
                      className="logo_img"
                      src="assets/img/logo.png"
                      alt="Lỗi"
                    />
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-sm-6" style={{width:'70%'}}>
              <div className="shopping-item">
                <a href="cart.html">
                  Cart - <span className="cart-amunt">$100</span>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="product-count">5</span>
                </a>
              </div>
              <div className="shopping-search">
                <form>
                  <input type="search" placeholder="Search" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/">Shop page</a>
                </li>
                <li>
                  <a href="/detail">Single product</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="a">Category</a>
                </li>
                <li>
                  <a href="a">Others</a>
                </li>
                <li>
                  <a href="a">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
