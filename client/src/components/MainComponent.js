import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Landing from './LandingComponent';
import Home from './HomeComponent';
import Footer from './Footer'
import Templates from '../containers/Templates';
class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/templates" component={Templates} />
                <Footer />
            </div>
        );
    }
}

export default Main;