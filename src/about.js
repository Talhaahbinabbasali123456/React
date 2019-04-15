import React, { Component } from 'react';
import './about.css';

class AboutSec extends Component {
    aboutPara(){
        return(
            <div>
                <h1 className='heading-title'>About</h1>
                <p>I am an energetic and enthusiastic person who enjoys a challenge and achieving personal goals. <br></br> My present career aim is to work within IT because I enjoy working with computers, <br></br> I enjoy the environment and I find the work interesting and satisfying. <br></br> The opportunity to learn new skills and work with new technologies <br></br> is particularly attractive to me..</p>
            </div>
        );
    }
    render(){
        return(
            <div className='about-para'>
                {this.aboutPara()}
            </div>
        );
    }
}
export default AboutSec;