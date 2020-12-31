import React from 'react';
import './nav.css';
import { Link } from "react-scroll";

function Nav() {
    return (
            <nav className="navb" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="AboutMe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>About Me</li>
                        </Link>
                        
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="ProjectCardlist"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Projects</li>
                        </Link>

                        
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </nav>
    );
  }
  
  export default Nav;