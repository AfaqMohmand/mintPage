import React from "react";
import "./icons.css";
import { BsTwitter, BsFacebook } from "react-icons/bs";
const Icons = () => {
  return (
    <>
      <div className="iconsContainer">
        <h3 className="iconsContainerText">Follow Us</h3>
        <span className="twitter-icon iconsBox">
          <BsTwitter />
        </span>
        <span className="iconsBox">
          <BsFacebook />
        </span>
      </div>
    </>
  );
};

export default Icons;
