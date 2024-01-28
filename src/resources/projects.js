import React, {Component} from "react";
import './css/projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'list',
            pro: [
                {
                    h: 'Glassdream.ge',
                    role: 'Front-End',
                    src: 'https://glassdream.ge',
                    class: 'project',
                    p: 'I developed the official website of the Georgian Company "Glass Dream" - Glassdream.ge . using React and CSS3 I coded the sophisticated web, I utilized tools such as Google Console, Figma and Lighthouse.',
                    repo: 'https://github.com/BekaDugladze',
                    date: 'Apr 2023'
                },
                {
                    h: 'Spotify Web Application',
                    role: 'Full-Stack',
                    src: 'https://spotify-app-front-zeta.vercel.app/',
                    class: 'project-rev',
                    p: 'I drew inspiration from the official Spotify website to bring my vision to life in an unique project. Leveraging my proficiency in React, CSS, Node, Express, OAuth and utilizing tools such as Google Console, Facebook Console, Spotify API and Figma, I meticulously crafted a demonstration of my skills.',
                    repo: 'https://github.com/BekaDugladze/spotifyAppBack',
                    date: 'Dec 2023'
                },
                {
                    h: 'TSU Student Portal',
                    role: 'Full-Stack',
                    src: 'https://tsu-portal.onrender.com/',
                    class: 'project',
                    p: 'I was inspired by the actual portal for students of the Tbilisi State University, so I want to develop web application. This is just 10% of the idea that I want to turn into a web application. I created Front End using React and Redux, the Backend is coded in Node and Express, I demonstrated my skills to manage the data in PostgreSQL. For designing I used Figma. Because of some reasons, just frontend is available in Live, yet.',
                    repo: 'https://github.com/BekaDugladze/TSU',
                    date: 'Sep 2023'
                },
                {
                    h: 'Volkswagen',
                    role: 'Front-End',
                    src: 'https://volkswagenge.netlify.app/',
                    class: 'project-rev',
                    p: 'I drew inspiration from the official Volkswagen website to bring my vision to life in a unique project. Leveraging my proficiency in React, JSON, CSS, and utilizing tools such as Figma, I meticulously crafted a demonstration of my skills.',
                    repo: 'https://github.com/BekaDugladze/vw',
                    date: 'Oct 2023'
                },
                {
                    h: 'Manglisi Inn',
                    role: 'Front-End',
                    src: 'https://manglisi.vercel.app/',
                    class: 'project',
                    p: 'The first bilingual project! Leveraging my proficiency in React, JSON, CSS, and utilizing tools such as Google Console and Figma, I meticulously crafted a demonstration of my skills.',
                    repo: 'https://github.com/BekaDugladze/manglisi',
                    date: 'Oct 2023'
                },
                {
                    h: 'Dinamo Tbilisi',
                    role: 'Front-End',
                    src: 'https://dinamo-lyart.vercel.app/',
                    class: 'project-rev',
                    p: 'the website of Georgian Football Club, Dinamo Tbilisi. Leveraging my proficiency in React, CSS, and utilizing tools such as Figma, I meticulously crafted a demonstration of my skills.',
                    repo: 'https://github.com/BekaDugladze/dinamo',
                    date: 'Nov 2023'
                },
        ]
        }
    }
    render() {
        return (
            <>
            <div id="projects">
                <h1>Projects</h1>
                {this.state.pro.map((item, index) => (
                <div key={index} className={item.class}>
                    <iframe src={item.src} title="Beka Dugladze's Projects" sandbox="allow-same-origin allow-scripts"></iframe>
                    <div className="desc">
                        <h2>{item.h}</h2>
                        <h3>{item.role} {item.date}</h3>
                        <p>{item.p}</p>
                        <div>
                            <a id="repo" href={item.repo} target="_blank" rel="noreferrer">Repo</a>
                            <a id="live" href={item.src} target="_blank" rel="noreferrer">Live</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <footer id="contact">
                <h1>Contact Me</h1>
                <div className="contact-row">
                    <div className="contact-col">
                        <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/beqa-dugladze-266374268/" target="_blank" rel="noreferrer">Beqa Dugladze</a></p>
                        <p><FontAwesomeIcon icon={faGithub} /> Github: <a href="https://github.com/BekaDugladze" target="_blank" rel="noreferrer">BekaDugladze</a></p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> E-Mail: <a href="mailto:dugladzebeqa@gmail.com" target="_blank" rel="noreferrer">dugladzebeqa@gmail.com</a></p>
                        <p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="phone:+995574474019" target="_blank" rel="noreferrer">+995 574 474 019</a></p>
                    </div>
                    <div className="contact-col" id="nav">
                        <a href="#abus">About Me</a>
                        <a href="#edu">Education</a>
                        <a href="#skill">Skills</a>
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <h3>@2024 Developed by Me 😍</h3>
            </footer>
            </>
        )
    }
}