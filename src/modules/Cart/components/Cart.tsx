import React from "react";
import NavBarr from "../../../components/layout/NavBarr";
import Footerr from "../../../components/layout/Footerr";

const Cart = () => {
  return (
    <div>
      <NavBarr />
      <div className="cart">
        <div className="cart-list">Chưa có sản phẩm nào trong giỏ hàng</div>
      </div>
      <Footerr />
    </div>
  );
};

export default Cart;
