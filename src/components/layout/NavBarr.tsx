import React from "react";
import { Link } from "react-router-dom";

const NavBarr = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/">Trang chủ</Link>
      </div>
      <div className="nav-item">
        <Link to="/productsList">Sản phẩm</Link>
      </div>
      <div className="nav-item">Tin tức</div>
      <div className="nav-item">Giới thiệu</div>
      <div className="nav-item">Chính sách bán hàng</div>
      <div className="nav-item">Liên hệ</div>
    </div>
  );
};

export default NavBarr;
