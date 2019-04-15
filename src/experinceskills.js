import React, { Component } from 'react';
import './exs.css';


class Experinceandskills extends Component {
    Experinceskills(){
        return(
            <div>
                <h1 className='heading-title-rtl'>Experience / Skills</h1>
                <p>
                    A <em>Year</em> experience in programming. including <strong>5 Months in 10pearls</strong>.  It was a great journey of my life. <br></br> Because I love coding like professionally.
                </p>
                <br></br>
                <div>
                    <h1>Languages, Tools & Version control system</h1>
                    <p className='skill-name'>
                        HTML, CSS, JavaScript, JQuery, React, Bootstrap, Word, Excel, Powerpoint, Sass, Photoshop, Filmora <br></br>
                        Bitbucket, Git, Github, Source Tree, Jira, <br></br>
                        Sublime Text Editor, Visual Studio, Visual Studio Code, 
                    </p>
                </div>
            </div>
        );
    }
    render(){
        return(
            <div>
                {this.Experinceskills()}
            </div>
        );
    }
}
export default Experinceandskills;