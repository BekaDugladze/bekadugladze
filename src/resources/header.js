import React, {Component} from "react";
import './css/header.css'

export default class Header extends Component {
    render() {
        return(
            <header id="header">
                <ul>
                    <li><a href="#abus">About Me</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </header>
        )
    }
}