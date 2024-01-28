import React , {Component} from 'react';
import './css/first.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleDown} from '@fortawesome/free-solid-svg-icons';

export default class First extends Component {
    render() {
        return(
        <div id='first'>
            <h1 style={{animation:'typing 5s steps(30, end), blink-caret .5s step-end infinite',}}>Hello, I am Beka Dugladze, Full-Stack Engineer from Georgia</h1>
            <a href='#header'><FontAwesomeIcon icon={faCircleDown} alt='See More'/></a>
        </div>
        )
    }
}