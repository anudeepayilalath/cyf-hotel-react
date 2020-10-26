import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import TouristInfoCards from "./TInCa";
import Footer from "./Footer";
import SearchResults from "./SearchResult";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;
