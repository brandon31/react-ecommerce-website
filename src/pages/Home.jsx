import React from "react";
import "../static/Home.css";
import tv from "../assets/products/tv.png";
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

const hTwo = {
  fontFamily: "arial",
  margin: "0rem -1rem",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
  color: "#222",
  backgroundColor: "#f1f1f1",
  overflow: "hidden",
};

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="content-text">
          <h1 className="home-title">
            Buy The Best Products Across <br /> The Whole World
          </h1>
          <p className="home-desc">
            Shop now and join the millions of people who <br /> trust us for all
            their needs.
          </p>

          <div className="home-btn">
            <form action="/products">
              <button id="product">Products</button>
            </form>
            <button id="sign-up">Signup</button>
          </div>
        </div>
        <div className="content-image">
          <img id="tv" src={tv} alt="tv" />
          <a href="/special">Special Products</a>
        </div>
      </div>
      <h2 style={hTwo}>Newest Products</h2>
      <div className="cards">
        <Cart />
        <Cart item={fifa} name={"FIFA 23 (PS5)"} price={"$59.99"} />
        <Cart item={pad} name={"Controller (PS5)"} price={"$48.99"} />
        <Cart item={mb} name={"MacBook Pro MLH42"} price={"$1999.99"} />
        <Cart item={chair} name={"Blue Chair"} price={"$86.54"} />
        <Cart item={xiomi} name={"Xiaomi PowerBank"} price={"$70.99"} />
        <Cart item={rolex} name={"SEA-DWELLER"} price={"$999.99"} />
        <Cart item={phone} name={"Iphone X"} price={"$210.99"} />
        <Cart item={nike} name={"Nike Sneakers"} price={"$45.20"} />
        <Cart item={keyboard} name={"Keyboard"} price={"$38.99"} />
      </div>
    </>
  );
}
