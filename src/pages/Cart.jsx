import React from "react";
import cam from "../assets/products/cam.png";
import "../static/Cart.css";

export default function Cart({ item, name, price }) {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={item} alt="item" id="item" />
          <p id="item-name">{name}</p>
          <p id="item-price">{price}</p>
        </div>
      </div>
    </>
  );
}

Cart.defaultProps = {
  item: cam,
  name: "Sony Lense",
  price: "$150.73",
};
