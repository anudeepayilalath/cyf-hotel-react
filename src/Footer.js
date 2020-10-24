import React from "react";

const content = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div>
      <ul>
        {content.map(items => {
          return <li>{items}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
