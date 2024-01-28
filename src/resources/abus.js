import React, {Component} from "react";
import './css/abus.css';
import me from './photo/9.jpg';
import cod from './photo/cod.webp';
import ud from './photo/ud.webp';
import udc from './cer/ud.pdf';
import full from './cer/full.pdf';
import red from './cer/red.pdf';

export default class AbEd extends Component {
    constructor(props){
        super(props);
        this.state = {
            edu: [{
                href: full,
                src: cod,
                alt: 'Codecademy, Full Stack Engineer, Developer, Node, React',
                h1: 'Full Stack Engineer',
                h2: 'Codecademy. Dec 2022 - Sep 2023',
                p: 'Front-end Development - HTML/CSS/JavaScript, React and Redux. <br/> Back-end Development - Node.js, Express. <br/> Databases - SQL, PostgreSQL. <br/> Web Security, Data Structures, Algorithms.'
            },
            {
                href: red,
                src: cod,
                alt: 'Codecademy, Redux, Full Stack Engineer, Developer, Node, React',
                h1: 'Learn Redux',
                h2: 'Codecademy. May 2023 - Jun 2023',
                p: 'Core Concepts in Redux. <br/> Core Redux API. <br/> Redux toolkit.'
            },
            {
                href: udc,
                src: ud,
                alt: 'Udemy, UI/UX Design. Web Design, Mobile Design, Responsive Design',
                h1: 'Complete Web and Mobile Designer in 2023: UI/UX, Figma, +more',
                h2: 'Codecademy. Apr 2023 - May 2023',
                p: 'Concepts of UI/UX Design. <br/> Concepts of design theory. <br/> Figma. <br/> Sketching, Wireframing and Prototyping.'
            },
        ]
        }
    }
    render() {
        return (
            <>
            <h1>About Me</h1>
            <div id="abus">
                <div className="p">
                    <p> I am a motivated Full-Stack Engineer actively involved in daily portfolio and freelance projects. 
                        I began my programming journey as a front-end developer, and after creating my first simple website, I realized my aspiration to independently build full-stack web applications. 
                        This realization fueled my dedication to learning and working extensively.
                        <br></br>
                        Over time, I have cultivated a diverse skill set, mastering various technologies and frameworks, including React/Redux, Express, and Node. 
                        I am proud to have achieved my initial goal of becoming proficient in full-stack development.
                        <br></br>
                        Now, my next objective is to ascend to the top tier of developers. So I start step-by-step.
                    </p>
                </div>
                <div>
                    <img src={me} alt="Full Stack Engineer, Beka Dugladze, Web Developer, UX/UI" width='100' height='auto' loading="lazy"/>
                </div>
            </div>
            <h1>Education</h1>
            <div id="edu">
                {this.state.edu.map((item, index) => (
                    <div className="edu-div" key={index}>
                        <a href={item.href} download='BekaDugladze.pdf' ><img src={item.src} alt={item.alt} width='50%' height='50%' /></a>
                        <div >
                            <h1>{item.h1}</h1>
                            <h2>{item.h2}</h2>
                            <p dangerouslySetInnerHTML={{__html: item.p}}></p>
                        </div>
                    </div>
                ))}
            </div>
            </>
        )
    }
}