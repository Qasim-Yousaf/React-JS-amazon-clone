import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  // here the state variable is global state of the app

  const [state, dispatch] = useStateValue();


  // console.log('Action is --------');
  // console.log((state.basket));


  const addToBasket = () => {
    //  dispatch the item into data layer
 
 
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_i, c) => (
              <StarIcon className="rating_starIcon" />
            ))}
        </div>
      </div>

      <img src={image} alt="pro_img" />

      <button onClick={() => addToBasket()}>Add to Basket</button>
    </div>
  );
}

export default Product;
