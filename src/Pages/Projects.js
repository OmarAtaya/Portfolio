import React from 'react';
import Navbar from '../Components/Navbar';
import Content from '../Components/projectsContent';
import PhoneNavbar from '../Components/PhoneNavbar';

function Projects() {
  return (
    <div className="w-full flex flex-col items-center text-center min-h-screen">
        <Navbar/>
        <PhoneNavbar/>
        <Content/>
    </div>
  )
}

export default Projects