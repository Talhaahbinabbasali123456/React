import React, { Component } from 'react';
import './project.css';
import bicycle from './skillimg/bicycle.PNG';
import weather from './skillimg/weather.PNG';
import houseleading from './skillimg/houseleading.PNG';

class Projects extends Component {
    projectcard1(){
        return(
            <div className='card-container'>
                <h1>The Bicycle</h1>
                <img className='p-img-height' src={bicycle} alt='img'></img>
                <p className='text-center'>This is a flex base project. and i was create that project through 'sass'. by the guidance of professional <br></br> developers.</p>
                <a className='anchor-flex' href='https://talhaahbinabbasali123456.github.io/bicycle/'>
                    <button className='btn'>Visit Site</button>
                </a>
            </div>
        );
    }
    projectcard2(){
        return(
            <div className='card-container'>
                <h1>House Leading</h1>
                <img className='p-img-height' src={houseleading} alt='img'></img>
                <p className='text-center'>This is a group project in 'wordpress'. people can login and register. people can post a 'ADD' any kind of home and apartment for selling and purchasing.</p>
                <a className='anchor-flex' href='http://dev-houseleading.pantheonsite.io/'>
                    <button className='btn'>Visit Site</button>
                </a>
            </div>
        );
    }
    projectcard3(){
        return(
            <div className='card-container'>
                <h1>Weather App</h1>
                <img className='p-img-height' src={weather} alt='img'></img>
                <p className='text-center'>This is a weather app. and i was create this App to get 'DATA' from another server with the help of 'AJAX' and <br></br> 'API Key'.</p>
                <a className='anchor-flex' href='https://talhaahbinabbasali123456.github.io/update-weather-app'>
                    <button className='btn'>Visit Site</button>
                </a>
            </div>
        );
    }
    render(){
        return(
            <div className='project-section'>
                <h1 className='heading-title'>Projects</h1>
                <p>I have some projects like 'News-App', 'Weather App', 'Cricket App' 'Portfolio', <br></br> 'Template Base Project', 'Float Base Project', 'Flex base project', <br></br> 'bootstrap project' and 'Group projects'..</p>
                <div className='cards-wrapper'>
                    {this.projectcard1()}
                    {this.projectcard2()}
                    {this.projectcard3()}
                </div>
                <a className='anchor-flex' href='https://github.com/Talhaahbinabbasali123456'>
                    <button className='btn'>More projects</button>
                </a>
                    
              
                
            </div>
        );
    }
}
export default Projects;