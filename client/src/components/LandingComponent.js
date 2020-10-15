import React, { useState, useEffect,useContext } from "react";
import { Navbar, Nav, Button, Carousel, Modal, Form } from "react-bootstrap";
import "../stylesheets/landingstyle.css";
import { images } from "./images";
import "aos/dist/aos.css";
import Aos from "aos";
import M from 'materialize-css'
import {UserContext} from './MainComponent'

const Landing=()=> {
const {state,dispatch} = useContext(UserContext)

  const [navbar, setNavbar] = useState(false);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [password,setPassword]= useState("")
   const [email,setEmail]= useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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


const PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       return M.toast({html:"invalid email",classes:"#3f51b5 indigo"}) 
    }
    fetch("/signin",{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            email
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
       if(data.error){
            M.toast({html:data.error,classes:"#e040fb purple accent-2"})
       }
       else{
           localStorage.setItem('jwt',data.token)
           localStorage.setItem('user',JSON.stringify(data.user))
           dispatch({type:"USER",payload:data.user})
           M.toast({html:"signedin successfull",classes:"#3f51b5 indigo"})
        //    history.push('/')
       }
    }).catch(err=>{
        console.log(err)
    })
}

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
          <Navbar.Brand href="#home" className="brand ml-md-5">
            &#8918;Portfolio Generator/&#8919;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="links">
                GET STARTED
              </Nav.Link>
              <Nav.Link href="/templates" className="links">
                TEMPLATES
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto mr-md-5">
              <Nav.Link href="#home" className="links">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                REGISTER
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="links">
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  value={email}
                 onChange={(e)=>{
             setEmail(e.target.value)
         }} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                    onChange={(e)=>{
             setPassword(e.target.value)
         }}
                />
              </Form.Group>
            </Form>
            <div className="text-center">
              <a href="#">Don't have an account? Sign Up</a><br />
              <a href="#">Forgot Password?</a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit"  onClick={()=>PostData()}>Login</Button> 
          </Modal.Footer>
        </Modal> 
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
            <Button onClick={handleShow} className="mt-3" variant="light" size="lg">
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
              <h2 className="px-5 pt-5">
                &#8858; Choose your website template
              </h2>
              <h5 className="px-5 pb-2 d-none d-md-block">
                Select from our industry-leading website templates, and color
                pallets to best fit your personal style and professional need
              </h5>
              <h2 className="px-5">&#8858; Add your social media links</h2>
              <h5 className="px-5 pb-2 d-none d-md-block">
                Add your social media links to increase your reach and make your
                website more useful
              </h5>
              <h2 className="px-5">
                &#8858; Make awesome mobile friendly portfolio
              </h2>
              <h5 className="px-5 pb-5 d-none d-md-block">
                Easily make awesome mobile friendly portfolio website of your in
                just few steps
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1
          className="p-5 text-right"
          style={{ fontSize: "8vh" }}
          data-aos="zoom-in"
        >
          Learn how
          <br /> to get started
        </h1>
        <div className="row pb-3">
          <div
            className="col-12 col-md-6 order-1 order-md-2"
            data-aos="zoom-in"
          >
            <img className="px-5 img-fluid" src={images.portfolio6} />
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1"
            data-aos="zoom-in"
          >
            <h5 className="px-5 py-3">
              01. Choose a template and start your free trail.
            </h5>
            <h5 className="px-5 py-3">
              02. Use our website builder to add your own text and photos.
            </h5>
            <h5 className="px-5 py-3">
              03. Costomize the site according to your need.
            </h5>
            <h5 className="px-5 py-3">
              04. Finish your work and get the domain of your site.
            </h5>
            <a className="animated px-5 py-3" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Landing;
