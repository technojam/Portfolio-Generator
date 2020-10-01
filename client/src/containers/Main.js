import React, { Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skill from "./skill/Skill";
import Footer from "./footer/Footer";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Greeting />
                <About />
                <Skill />
                <Footer />
                
            </div>
        );
    }
}
