import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className='heading-title-rtl'>Get In Touch</h1>
                <div className='git-container'>
                <div className='form'>
                 <div className='get-in-touch'>
                    <p>Owner Name : Talha Abbas </p>
                    <p>Contact Number : 03242341018</p>
                    <p>Address : Karachi, Pakistan</p>
                </div>
                    <input type='text' placeholder='Your Name'></input>
                    <input type='text' placeholder='Your Email'></input>
                    <textarea className="comment-inp"  placeholder='Your Massage'></textarea>
                    <br></br>
                    <button className='btn'>Send Massage</button>
                </div>
              
            </div>
        </div>
            
        );
    }
}
export default Contact;