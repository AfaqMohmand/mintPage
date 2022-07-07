import React from "react";
import "./button.css";
const Button = ({ text }) => {
  return (
    <>
      <button type="button" className="Btn-container-second__1st">
        {text}
      </button>
    </>
  );
};

export default Button;
