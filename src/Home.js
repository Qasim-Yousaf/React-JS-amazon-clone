import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner image"
        />

        <div className="home_row">
          <Product
            id="1"
            title="AmazonBasics 6-Outlet, 200 Joule Surge "
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={4}
            price={40}
          />

          <Product
            id="2"
            title="TCL 32S325 32 Inch 720p Roku Smart LED TV (2019) "
            image="https://m.media-amazon.com/images/I/71YZlXXFktL._AC_UL320_.jpg"
            rating={3}
            price={129}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
            image="https://images-na.ssl-images-amazon.com/images/I/41yn8u3qJPL._AC_US160_.jpg"
            rating={4}
            price={41}
          />

          <Product
            id="4"
            title="Fjallraven, Kanken Classic Backpack for Everyday"
            image="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX522_.jpg"
            rating={2}
            price={70.94}
          />

          <Product
            id="5"
            title="Pokemon Pikachu 8 Plush - Officially Licensed and Stuffed Animal Material"
            image="https://m.media-amazon.com/images/I/410IWzsZhvL._AC_SY200_.jpg"
            rating={2}
            price={18.99}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters"
            image="https://m.media-amazon.com/images/I/411t4QoLZaL._AC_SY200_.jpg"
            rating={3}
            price={40}
          />

          <Product
            id="7"
            title="Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters"
            image="https://m.media-amazon.com/images/I/51J+3AwprQL._AC_SR160,160_.jpg"
            rating={5}
            price={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
