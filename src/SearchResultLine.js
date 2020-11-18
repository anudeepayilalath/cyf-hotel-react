import React, { useState } from "react";
import moment from "moment";

function SearchResultLine(props) {
  function difference(datea, dateb) {
    var a = moment(datea);
    var b = moment(dateb);
    return a.diff(b, "days");
  }
  const [color, setColor] = useState(null);
  function clickOnLine() {
    if (!color) {
      setColor("table-danger");
    } else {
      setColor(null);
    }
  }

  function handleClick(e) {
    console.log(e.target.id);
    props.setbuttonId(e.target.id);
  }
  console.log(props);

  return (
    <tr key={props.index} onClick={clickOnLine} className={color}>
      <td>{props.items.id}</td>
      <td>{props.items.title}</td>
      <td>{props.items.firstName}</td>
      <td>{props.items.surname}</td>
      <td>{props.items.email}</td>
      <td>{props.items.roomId}</td>
      <td>{props.items.checkInDate}</td>
      <td>{props.items.checkOutDate}</td>
      <td>{difference(props.items.checkOutDate, props.items.checkInDate)}</td>
      <td>
        <button onClick={handleClick} id={props.items.id}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchResultLine;
