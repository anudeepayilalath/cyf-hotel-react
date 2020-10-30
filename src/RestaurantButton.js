import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.numb} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
