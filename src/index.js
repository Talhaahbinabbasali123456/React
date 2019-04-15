import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavEle from './navbar';
import HeaderEle from './header';
import Links from './link';
import logo from './my-logo.png';
import AboutSec from './about';
import Experinceandskills from './experinceskills';
import Projects from './project';
import Footer from './footer';
import humburger from './skillimg/hmbrgr.png';
import Contact from './contact';
import sideNaveOpen from './sidenav';
import sideNaveClose from'./sidenavclose';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <section className='header-layout' id='home'>
        <div className='side-navbar'>
            <div className='flex-coloum'> 
                <h1  className='closebtn' onClick={sideNaveClose}>Close</h1>
                <NavEle  link='#home' linkText='Home'/>
                <NavEle  link='#about' linkText='About'/>
                <NavEle  link='#experience' linkText='Experience/ Skills'/>
                <NavEle  link='#project' linkText='Projects'/>
                <NavEle  link='#contact' linkText='Contact'/>
            </div> 
        </div>
        <section className="nav-layout">
            <div className="nav-logo">
                <img className='logo-height' src={logo} alt='img'></img> 
            </div>
            <div className='nav-items'> 
                <NavEle  link='#home' linkText='Home'/>
                <NavEle  link='#about'  linkText='About'/>
                <NavEle  link='#experience'  linkText='Experience/ Skills'/>
                <NavEle  link='#project' linkText='Projects'/>
                <NavEle  link='#contact' linkText='Contact'/>
            </div> 
            <div className='hmbrgr-cont'>
                <img className='hmbrgr-height' onClick={sideNaveOpen} src={humburger} alt='img'></img>
           </div>
        </section>
        <section className='header-slider'>
                <HeaderEle/>
                <section className='about-section' id='about'>
                    <AboutSec/>
                </section>
                <section className='exs-section rtl' id='experience'>
                    <Experinceandskills/>
                </section>
        </section>
                <Links link='#'/>
        <section id='project'>
                <Projects />
        </section>
        <section id='contact' className='contact-container rtl'>
                <Contact />
        </section>
        <section className='bg-black'>
                <Footer/>
        </section>
    </section>, 
    document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    // serviceWorker.unregister();
    