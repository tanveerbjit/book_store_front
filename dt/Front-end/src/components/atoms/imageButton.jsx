// Atom: ImageButton.js
import React from "react";

function ImageButton({ icon, onClick }) {
  return (
    <a className="btn btn-outline-dark btn-square" href="#" onClick={onClick}>
      <i className={icon}></i>
    </a>
  );
}

export default ImageButton;
