import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="container-fluid bg-dark my-0 py-3 text-light">
     
     
      <p class="mb-0 text-center">&copy; 2020-2021 softwarefolio</p>
        <p class="mb-0 text-center">
            <a href="#">Back to top |</a>
            <a href="#">Privacy |</a>
            <a href="#">Terms</a>
        </p>
    </div>
    </Fade>
  );
}