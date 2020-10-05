import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Landing from './LandingComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Landing />
               {/* <Header/>  */}
               {/* <Route exact path="/" component={()=> <Home/>}/>
               <Route path="/home" component={()=> <Home/>}/>
               <Route path="/about" component={()=> <About/>}/>
               <Footer/> */}
            </div>
        );
    }
}

export default Main;