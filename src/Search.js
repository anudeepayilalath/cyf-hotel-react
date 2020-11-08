import React, { useEffect, useState } from "react";
import Button from "./Button";

const Search = () => {
  const [searchInput, setsearchInput] = useState("");

  const handleSearchInput = event => {
    setsearchInput(event.target.value);
    console.log("SEN", setsearchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
