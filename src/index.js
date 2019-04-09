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
// import Sidenav from './sidenav';


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <section class='header-layout' id='home'>
        <div class='side-navbar'>
            <div class='nav-items flex-coloum'> 
                <NavEle  link='#home' linkText='Home'/>
                <NavEle  link='#about'  linkText='About'/>
                <NavEle  link='#experience'  linkText='Experience/ Skills'/>
                <NavEle  link='#project' linkText='Projects'/>
            </div> 
        </div>
        <section class="nav-layout">
            <div class="nav-logo">
                <img class='logo-height' src={logo} alt='img'></img> 
            </div>
            <div class='nav-items'> 
                <NavEle  link='#home' linkText='Home'/>
                <NavEle  link='#about'  linkText='About'/>
                <NavEle  link='#experience'  linkText='Experience/ Skills'/>
                <NavEle  link='#project' linkText='Projects'/>
            </div> 
            <div class='hmbrgr-cont'>
                <img class='hmbrgr-height' onClick='hmbrgr()' src={humburger} alt='img'></img>

                 {/* <Sidenav/> */}
           </div>
        </section>
        <section class='header-slider'>
                <HeaderEle title='blah blah'/>
                <section class='about-section' id='about'>
                    <AboutSec/>
                </section>
                <section class='exs-section rtl' id='experience'>
                    <Experinceandskills/>
                </section>
        </section>
                <Links link='#'/>
        <section id='project'>
                <Projects />
        </section>
        <section class='bg-black'>
                <Footer/>
        </section>
    </section>, 
    document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    // serviceWorker.unregister();
    