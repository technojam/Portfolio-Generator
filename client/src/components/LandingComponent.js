import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Carousel } from "react-bootstrap";
import "../style.css";
import { images } from "./images";
import 'aos/dist/aos.css';
import Aos from 'aos';

function Landing() {
  const [navbar, setNavbar] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="main">
      <div className="container-fluid">
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
          className={
            navbar ? "landing-navbar active mb-5" : "landing-navbar mb-5"
          }
        >
          <Navbar.Brand href="#home" className="brand ml-5">
           &#8918;Portfolio Generator/&#8919;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="links">
                GET STARTED
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                TEMPLATES
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto mr-5">
              <Nav.Link href="#home" className="links">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                REGISTER
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row pt-5">
          <div className="col-12 col-md-6 p-5">
            <h1 style={{ color: "white", fontSize: "8vh" }}>
              The easy way to <br />
              build a Portfolio website
            </h1>
            <h5 className="pt-2" style={{ color: "whitesmoke" }}>
              Simple tools for your big ideas.Start your free website trial
              today, with awesome templates, no credit card required.
            </h5>
            <Button className="mt-3" variant="light" size="lg">
              GET STARTED
            </Button>
          </div>
          <div className="col-12 col-md-6 py-5 pl-5">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className=" mt-lg-5 pt-lg-5"
            >
              <Carousel.Item interval={300}>
                <img
                  className="d-block w-100"
                  src={images.portfolio1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={300}>
                <img
                  className="d-block w-100"
                  src={images.portfolio2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={300}>
                <img
                  className="d-block w-100"
                  src={images.portfolio3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={300}>
                <img
                  className="d-block w-100"
                  src={images.portfolio4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="p-5 head" data-aos="zoom-in">
          Turn your ideas <br />
          into reality.
        </h1>
        <div className="row">
          <div className="col-12 col-md-6" data-aos="zoom-in">
            <img className="img-fluid" src={images.portfolio5} />
          </div>
          <div className="col-12 col-md-6" data-aos="zoom-in">
            <div className="description mx-5 mb-5 mt-2">
              <h2 className="px-5 pt-5">Choose your website template</h2>
              <h5 className="px-5 pb-2">
                Select from our industry-leading website templates, and color
                pallets to best fit your personal style and professional need
              </h5>
              <h2 className="px-5">Add your social media links</h2>
              <h5 className="px-5 pb-2">
                Add your social media links to increase your reach and make your
                website more useful
              </h5>
              <h2 className="px-5">Make awesome mobile friendly portfolio</h2>
              <h5 className="px-5 pb-5">
                Easily make awesome mobile friendly portfolio website of your in
                just few steps
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="p-5 text-right" style={{ fontSize: "8vh" }} data-aos="zoom-in" >
          Learn how
          <br /> to get started
        </h1>
        <div className="row pb-3">
          <div className="col-12 col-md-6 order-1 order-md-2" data-aos="zoom-in">
            <img className="px-5 img-fluid" src={images.portfolio6} />
          </div>
          <div className="col-12 col-md-6 order-2 order-md-1" data-aos="zoom-in">
            <h5 className="px-5 py-3">01. Choose a template and start your free trail.</h5>
            <h5 className="px-5 py-3">02. Use our website builder to add your own text and photos.</h5>
            <h5 className="px-5 py-3">03. Costomize the site according to your need.</h5>
            <h5 className="px-5 py-3">04. Finish your work and get the domain of your site.</h5>
            <a className="animated px-5 py-3" href="#">Get Started</a>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "black"}} className="text-center">
        <small style={{color: "white"}}>&copy; 2020 all rights reserved</small>
      </div>
    </div>
  );
}

export default Landing;
