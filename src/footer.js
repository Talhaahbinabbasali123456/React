import React, { Component } from 'react';
import './footer.css';
import footlogo from './my-logo.png';
class Footer extends Component {
    render() {
        return(
            <div class='flex-space-around'>
                <img class='footer-logo-height' src={footlogo}></img>
                <h6 class='font-20'>Copyright ©</h6>
            </div>
        );
    }
}
export default Footer;