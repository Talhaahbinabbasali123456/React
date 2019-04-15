import React, { Component } from 'react';
import './footer.css';
import footlogo from './my-logo.png';
class Footer extends Component {
    render() {
        return(
            <div className='flex-space-around'>
                <h6 className='font-20'>Copyright ©</h6>
                <img className='logo-height' src={footlogo} alt='img'></img>
            </div>
        );
    }
}
export default Footer;