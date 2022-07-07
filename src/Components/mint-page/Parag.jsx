import React from "react";
import "./parag.css";
const Text = ({ parag, nextParag }) => {
  return (
    <>
      <p className="mint-container-third__second font-face-gm">{parag}</p>
      <p className="nextParag">{nextParag}</p>
    </>
  );
};

export default Text;
