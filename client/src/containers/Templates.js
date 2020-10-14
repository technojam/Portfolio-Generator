import React, { useEffect } from "react";
import { images } from "../components/images";
import "aos/dist/aos.css";
import Aos from "aos";
import "../stylesheets/templates.css";

function Templates() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="templates-body">
      <div className="container">
        <h1 className="text-center p-2" style={{ fontSize: "8vh" }}>
          Portfolio Templates
        </h1>
        <div className="row">
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio1} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio2} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio3} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio4} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio2} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 temp" data-aos="fade-up">
            <img className="img-fluid" src={images.portfolio1} />
            <div className="temp-overlay"></div>
            <div className="temp-details">
              <a href="#" className="animated">
                Use this Template
              </a>
              <br />
              <a href="#" className="animated">
                Preview
              </a>
            </div>
            <div className="mobile-temp-detail d-flex d-block d-md-none">
              <a href="#" className="animated" style={{ color: "black" }}>
                Use this Template
              </a>
              <br />
              <a href="#" className="animated" style={{ color: "black" }}>
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Templates;
