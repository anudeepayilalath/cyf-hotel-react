import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult.js";

/*import FakeBookings from "./data/fakeBookings.json";*/

const Bookings = () => {
  const [booking, setBoookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    console.log("Hola");
    fetch("https://cyf-react.glitch.me")
      .then(result => {
        return result.json();
      })
      .then(response => setBoookings(response));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;
