import React from "react";
import Fakes from "./data/fakeBookings.json";
import moment from "moment";
console.log(Fakes);

// 1

function SearchResults() {
  function difference(datea, dateb) {
    var a = moment(datea);
    var b = moment(dateb);
    return a.diff(b, "days");
  }

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
          {Fakes.map((items, index) => (
            <tr key={index}>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.firstName}</td>
              <td>{items.surname}</td>
              <td>{items.email}</td>
              <td>{items.roomId}</td>
              <td>{items.checkInDate}</td>
              <td>{items.checkOutDate}</td>
              <td>{difference(items.checkOutDate, items.checkInDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
