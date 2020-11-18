import React, { useState } from "react";
//import Fakes from "./data/fakeBookings.json";
// import moment from "moment";
import SearchResultLine from "./SearchResultLine";
import CustomerProfile from "./CustomerProfile";

// 1

function SearchResults(props) {
  const [buttonId, setbuttonId] = useState(null);
  return (
    <div id="tablediv">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">RoomID</th>
            <th scope="col">CheckIn Date</th>
            <th scope="col">CheckOut Date</th>
            <th scope="col"> Num of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((items, index) => (
            <SearchResultLine
              index={index}
              setbuttonId={setbuttonId}
              items={items}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={buttonId} />
    </div>
  );
}

export default SearchResults;
