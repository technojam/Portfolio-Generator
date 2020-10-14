import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black" }} className="text-center">
      <small style={{ color: "white" }}>&copy; 2020 all rights reserved</small>
      <br />
      <small>
        <a style={{ color: "white" }} href="/home">
          Back to Home |
        </a>
        <a style={{ color: "white" }} href="#">
          Back to top |
        </a>
        <a style={{ color: "white" }} href="#">
          Privacy |
        </a>
        <a style={{ color: "white" }} href="#">
          Terms
        </a>
      </small>
    </div>
  );
}
