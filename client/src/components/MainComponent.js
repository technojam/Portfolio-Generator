import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Skills from "../containers/skill/Skills";
import About from "../containers/about/About";
import Header from './Header';
import Footer from "../components/footer/Footer";
class Main extends Component {
    render() {
        return (
            <div>
               <Header/> 
               {/* <Home/> */}
               {/* <About/> */}
               <Skills/>
               {/* <Projects/> */}
               <Footer/> 
            </div>
        );
    }
}

export default Main;