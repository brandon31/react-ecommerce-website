import React from "react";
import "../static/Product.css";
import Cart from "./Cart";
import keyboard from "../assets/products/keyboard.png";
import fifa from "../assets/products/fifa.png";
import pad from "../assets/products/pad.png";
import nike from "../assets/products/nike.png";
import mb from "../assets/products/mb.png";
import chair from "../assets/products/chair.png";
import phone from "../assets/products/phone.png";
import rolex from "../assets/products/rolex.png";
import xiomi from "../assets/products/xiomi.jpg";

export default function Product() {
  return (
    <>
      <h2 id="p-headline">Everything You Need, All in One Place</h2>
      <p id="product-pgph">
        Buy your products at an affordable price, <br /> with one month return
        warrant!
      </p>
      <div className="cards">
        <Cart />
        <Cart item={pad} name={"Controller (PS5)"} price={"$48.99"} />
        <Cart item={fifa} name={"FIFA 23 (PS5)"} price={"$59.99"} />
        <Cart item={nike} name={"Nike Sneakers"} price={"$45.20"} />
        <Cart item={mb} name={"MacBook Pro MLH42"} price={"$1999.99"} />
        <Cart item={chair} name={"Blue Chair"} price={"$86.54"} />
        <Cart item={xiomi} name={"Xiaomi PowerBank"} price={"$70.99"} />
        <Cart item={rolex} name={"SEA-DWELLER"} price={"$999.99"} />
        <Cart item={phone} name={"Iphone X"} price={"$210.99"} />
        <Cart item={keyboard} name={"Keyboard"} price={"$38.99"} />
      </div>
    </>
  );
}
