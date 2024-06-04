import React, {useState} from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMenu, MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

function PhoneNavbar() {
    const [menu, setMenu] = useState(false);
    return (
        <div className='w-full flex justify-center md:hidden'>
            <div className="md:hidden mt-8 flex justify-between w-4/5">
                <MdMenu color='#323232' size={30} onClick={()=>{setMenu(true)}}/>
                <div className="flex flex-row gap-9">
                    <a href='https://qa.linkedin.com/in/omarataya3' target="_blank" rel="noreferrer">
                        <FaLinkedin color='#323232' size={30}/>
                    </a>
                    <a href='https://github.com/OmarAtaya' target="_blank" rel="noreferrer">
                        <FaGithub color='#323232' size={30}/>
                    </a>
                </div>
            </div>
            {menu && (
                    <div className="w-screen h-screen bg-[#DDD0C8] absolute z-10 flex justify-center">
                        <div className="flex flex-col w-4/5 mt-8 gap-10 font-bold items-center justify-center">
                            <MdCancel color='#323232' size={30} onClick={()=>{setMenu(false)}}/>
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
                    </div>
                )
            }
        </div>
    )
}

export default PhoneNavbar