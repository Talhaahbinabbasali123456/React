import React, { Component } from 'react';
import './link.css';
import Fbicon from './skillimg/facebook.png';
import Gicon from './skillimg/gmail.png';
import Ticon from './skillimg/Twitter.png';
import Whatsappicon from './skillimg/whatsapp.png';
import Github from './skillimg/github2.png';

class Links extends Component {
    render(){
        return (
            <div class='absolute-links'>
                <img class='social-icon-height' title='Facebook' src={Fbicon} alt='img'></img>
                <img class='social-icon-height' title='Gmail' src={Gicon} alt='img'></img>
                <img class='social-icon-height' title='Twitter' src={Ticon} alt='img'></img>
                <img class='social-icon-height' title='WhatsApp' src={Whatsappicon} alt='img'></img>
                <img class='social-icon-height' title='Github' src={Github} alt='img'></img>
            </div>
            // <a href={this.props.link} title={this.props.title}>{this.props.linkText}</a>
        );
    }
}
export default Links;
