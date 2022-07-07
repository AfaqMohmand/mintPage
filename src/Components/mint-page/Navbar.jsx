import React from "react";
import "./navbar.css";
import Vector from "../../assets/Vector.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container-img">
          <img src={Vector} alt="" />
          <h3 className="navbar-container-h3 ">NODE TREES</h3>
        </div>
        <button type="button" className="navbar-container-Btn">
          Connect Wallet
        </button>
        {/* <Button text="Connect wallet" className="navbar-container-Btn" /> */}
      </div>
    </>
  );
};

export default Navbar;
