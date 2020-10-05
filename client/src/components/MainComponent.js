import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Landing from './LandingComponent';
import Home from './HomeComponent';
class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
               {/* <Header/> 
               {/* <Home/> */}
               {/* <About/> */}
               {/* <Skills/> */}
               {/* <Projects/> */}
               {/* <Footer/>  */}
            </div>
        );
    }
}

export default Main;