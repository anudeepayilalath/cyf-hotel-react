import React, { useState } from "react";

const Button = () => {
  const [first, second] = "name";
  return (
    <div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default Button;
