import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  const [salad, setSalad] = useState(0);
  const [cake, setCake] = useState(0);

  function neworder() {
    setOrder(order + 1);
    console.log(order);
  }

  function neworder2() {
    setSalad(salad + 1);
    console.log(cake);
  }

  function neworder3() {
    setCake(cake + 1);
  }

  return (
    <div id="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order} <RestaurantButton numb={neworder} />
          Salads: {salad} <RestaurantButton numb={neworder2} />
          Chocolate-Cake: {cake} <RestaurantButton numb={neworder3} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
