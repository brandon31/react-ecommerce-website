import React from "react";
import "../static/Special.css";

export default function Special() {
  return (
    <>
      <div className="special">
        <h2 id="special-headline">Discover Our Exclusive Collection</h2>
        <p id="spec">
          Welcome to our exclusive collection, featuring a handpicked selection
          of our most unique and sought-after products. From limited-edition
          items to one-of-a-kind pieces, this collection is the perfect
          destination for shoppers looking for something truly special.
        </p>
        <p id="spec">
          Our team of expert buyers scours the globe to bring you the best in
          luxury and design, with a focus on quality, craftsmanship, and
          innovation. Whether you're looking for a statement piece to add to
          your home decor or a one-of-a-kind accessory to elevate your wardrobe,
          we've got you covered.
        </p>
        <p id="spec">
          Plus, shopping with us means you're getting access to items that you
          won't find anywhere else. Our exclusive collection features products
          that are only available through our store, so you can be sure that
          you're getting something truly unique and special.
        </p>
        <p id="spec">
          So why settle for ordinary when you can have something extraordinary?
          Browse our exclusive collection today and discover the best in luxury
          and design. Shop now and elevate your style to the next level.
        </p>
        <form action="/products">
          <button id="shop-now">Shop Now</button>
        </form>
      </div>
    </>
  );
}
