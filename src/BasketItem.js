import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";


function BasketItem({id, title , image, price , rating}) {

// function BasketItem() {

//             let id="6"
//             let title="Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters"
//             // let image="https://m.media-amazon.com/images/I/411t4QoLZaL._AC_SY200_.jpg"
//             let  image="https://m.media-amazon.com/images/I/71YZlXXFktL._AC_UL320_.jpg"
//             let rating=3;
//             let price=40;
  return (

    <div className="basketItem">
      <img className="basketItem_image" src={image} alt={"Basket Item image"} />

      <div className="basketItem_info">

      <p>{title}</p>
      <div className="basketItem_priceInfo">
        <small>$</small>
        <strong>{price}</strong>
      </div>

      <div className="basketItem_rating">
        {Array(rating).fill().map( (_i , c) => <StarIcon className="star_icon"/> )}
      </div>

      <button>Remove from Basket</button>
    </div>
    </div>

  );
}

export default BasketItem;
