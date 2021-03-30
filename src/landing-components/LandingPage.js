import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import sailboat from "../images/sailboat.png";

const Footer = styled.footer`
  background-color: #f2f2f2;
  color: #222f65;
  height: 70px;
  text-align: center;
  padding-top: 45px;
`;

function LandingPage() {
  return (
    <div className="landingPage">
      <Nav />
      <h1>Bridging Our Advocates Together</h1>
      <h6>
        Join our private networking space, The BOAT, where you can keep
        organized and keep in touch with amazing advocates, like yourself.
      </h6>
      {/* seperate buttons into components, add onClick */}
      <button className="primary">Join Us</button>
      <button className="secondary">Learn More</button>
      {/* <img src="./sailboat.png" alt="sailboat" /> */}
      <img src={sailboat} alt="sailboat" />
      <img src="./blob.png" alt="background style-blob" />
      <Footer>
        <hr />
        <a href="https://github.com/big-brainers">2021 © Big Brainers</a>
      </Footer>
    </div>
  );
}
export default LandingPage;
