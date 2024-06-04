import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="hidden md:flex flex-row justify-between w-4/5 mt-8">
            <div className="flex flex-row gap-9 font-bold">
                <Link to="/">
                    HOME
                </Link>
                <Link to="/about">
                    ABOUT
                </Link>
                <Link to="/projects">
                    PROJECTS
                </Link>
                <Link to="/files/CV-Omar.pdf" target="_blank" download>
                    RESUME
                </Link>
            </div>
            <div className="flex flex-row gap-9">
                <a href='https://qa.linkedin.com/in/omarataya3' target="_blank" rel="noreferrer">
                    <FaLinkedin color='#323232' size={30}/>
                </a>
                <a href='https://github.com/OmarAtaya' target="_blank" rel="noreferrer">
                    <FaGithub color='#323232' size={30}/>
                </a>
            </div>
        </div>
    )
}

export default Navbar