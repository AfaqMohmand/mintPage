import React from "react";
import "./mint-footer.css";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import Icons from "./Icons";
const MintFooter = () => {
  return (
    <>
      <div className="icons-container">
        <h3 className="icons-container-firstText">
          2022 NODE TREE NFT-POWERED BY BLOCTAK
        </h3>
        <div className="icons-container-end">
          <Icons className="footerIcons" />
        </div>
      </div>
    </>
  );
};

export default MintFooter;
