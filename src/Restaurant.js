import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  function neworder() {
    setOrder(order + 1);
  }
  return (
    <div id="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order} <RestaurantButton numb={neworder} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
