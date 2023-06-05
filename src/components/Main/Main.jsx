import React from "react";
import "../../styles/Main.css";

function Main(props) {
  return (
    <div className="main">
      <h1 className="header">Best cat cafees</h1>
      <h2 className="list">The list of our cafees</h2>
      <div className="container-fluid"><img
        className="main_img" width='50'
        src="https://cdn.shopify.com/s/files/1/0059/0666/1443/files/DrinkCoffeeFeedCatsBanner_1500x.jpg?v=1656366817"
      ></img>
      </div>      
    </div>
  );
}

export default Main;
