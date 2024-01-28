import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import './css/skill.css'

export default class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: [{
                h: 'HTML',
                i: [faStar, faStar, faStar, faStar, faStar]
            },
            {
                h: 'CSS',
                i: [faStar, faStar, faStar, faStar, faStar]
            },
            {
                h: 'JavaScript',
                i: [faStar, faStar, faStar, faStar, faStar]
            },
            {
                h: 'React',
                i: [faStar, faStar, faStar, faStar, faStar]
            },
            {
                h: 'Redux',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Node/Express',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'SQL/PostgreSQL',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'OAuth',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'RESTful API',
                i: [faStar, faStar, faStar]
            },
            {
                h: 'GIT',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'AWS / Google Console',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'JSON',
                i: [faStar, faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Docker',
                i: [faStar, faStar, faStar]
            },
        ],
        other: [
            {
                h: 'Authentication & Authorization',
                i: [faStar, faStar, faStar, faStar]
            },
            {
                h: 'Figma',
                i: [faStar, faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'github',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Server Deployment',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Caching and Performance Optimization',
                i: [faStar, faStar, faStar, faStar, ]
            },
            {
                h: 'Web Security',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Algorithms',
                i: [faStar, faStar, faStar]
            },
            {
                h: 'Testing',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Problem solving and debugging',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
            {
                h: 'Data Structures',
                i: [faStar, faStar, faStar, faStarHalfStroke]
            },
        ]
        }
    }
    render() {
        return (
            <div id="skill">
                <h1>My Skills</h1>
                <div className="skills-div">
                <div id="coding"> 
                    <h2>Coding</h2>
                    {this.state.code.map((item, index) => (
                    <div className="skills" key={index}>
                        <p>{item.h}</p>
                        <div className="icons" >
                        {item.i.map((item, index) => (
                            <FontAwesomeIcon icon={item} style={{color: '#0B4276'}} key={index} />
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                <div id="others"> 
                    <h2>Others</h2>
                    {this.state.other.map((item, index) => (
                    <div className="skills" key={index}>
                        <p>{item.h}</p>
                        <div className="icons" >
                        {item.i.map((item, index) => (
                            <FontAwesomeIcon icon={item} style={{color: '#0B4276'}} key={index} />
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        )
    }
}