import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad image"
        />

        <div className="checkout_title">
          <h1>Your Shopping Basket</h1>

          {/* Basket item  */}
          {/* Basket item  */}
          {/* Basket item  */}
          {/* Basket item  */}
        </div>

{/* <BasketItem /> */}
        {state.basket.length > 0 ? (
          state.basket.map(({id,title,price,image,rating}) => <BasketItem key={id} id={id} price={price} title={title} image={image} rating={rating} />)
        ) : (
          <h2>No Items in the Basket</h2>
        )}
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
