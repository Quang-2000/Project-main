import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Space, Tooltip } from "antd";

const Headerr = () => {
  return (
    <div>
      <div className="login">
        <div>
          <PhoneOutlined />
        </div>
        <div className="phone">Hotline: 0385686633 - 0987475837</div>
        <Link to="/loginPage">
          <button className="login-page">ĐĂNG NHẬP</button>
        </Link>
        <div>|</div>
        <Link to="/registerPage">
          <button className="register">ĐĂNG KÝ</button>
        </Link>
      </div>
      <div className="header">
        <img
          className="img-logo"
          src="https://c8.alamy.com/comp/2B5YGHB/vector-cat-logo-design-template-abstract-animal-icon-label-for-store-veterinary-clinic-shelter-business-services-flat-illustration-background-wit-2B5YGHB.jpg"
          alt="Logo"
        />
        <div className="name-shop">Catto Shop</div>
        <div className="form">
          <form
            className="d-flex justify-content-center align-items-center"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm sản phẩm"
              aria-label="Search"
            />
            <Tooltip title="Tìm kiếm">
              <Button
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                htmlType="submit"
              />
            </Tooltip>
          </form>
        </div>
        <div className="cart-logo">
          <Button className="button-cart" type="default">
            <Space>
              <Link to="/cartPage">
                <ShoppingCartOutlined />
              </Link>
            </Space>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Headerr;
