import React, { Component } from 'react'
import Header from './Header';
import Footer from './footer/Footer';
import SoftwareSkill from './softwareSkills/SoftwareSkill';
import Skills from '../containers/skill/Skills';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <SoftwareSkill /> */}
                {/* <Skills/>
                <Footer /> */}
            </div>
        )
    }
}
