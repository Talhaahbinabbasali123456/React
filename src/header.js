import React, { Component } from 'react';
import './header.css';
import resume from './skillimg/TalhaAbbasAli.docx';

class HeaderEle extends Component {
    ownerName(){
        let myName = <h1 class='Owner-name'>Talha Abbas</h1>;
        let mydesignation = <p class='Owner-designation'>Front-End Web Developer</p>;
        let myintro = <p class='Owner-intro'>Developer, Designer, Freelancer.</p>;
        let button =  <div class='Owner-Resume-btn'>
        <a href={resume} download>
            <button class='btn'>Get Resume</button>
        </a>
        <a href='#about'>
            <button class='btn'>Get Started</button>
        </a>
        </div>;
            return React.createElement('div', null, myName, mydesignation, myintro, button);
            
    }

    render() {
        return(
                this.ownerName()
        );
    }
}
export default HeaderEle;