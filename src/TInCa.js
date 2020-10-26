import React from "react";

const TouristInfoCards = () => {
  return (
    <div id="carddiv">
      <div className="card">
        <img
          src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F6af491d0-cec4-11ea-bbb4-8fadf03ff542.jpg?crop=2667%2C1500%2C0%2C0&resize=1180"
          className="card-img-top"
        />
        <h2>Glasgow</h2>
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://victoriawarehouse.com/wp-content/uploads/2019/07/Manchester-Skyline-2-1920x1080-2.jpg"
          className="card-img-top"
        />
        <h2>Manchester</h2>
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg"
          className="card-img-top"
        />
        <h2>London</h2>
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
