import React from "react";
import "./Header.css";
// import its own css

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
  // it automaticlly destrcutre the state and get all the basket details array 
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* logo on the left side  */}

      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt="header image"
        />
      </Link>

      {/* search bar container  */}

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* navigation on the right side */}

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineOne">Hello, Guest</span>
          <span className="header_option_lineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_option_lineOne">Orders</span>
          <span className="header_option_lineTwo">& Returns</span>
        </div>

        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basketOption">
            <ShoppingBasketIcon className="basketIcon" />
            <span className="header_option_lineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
