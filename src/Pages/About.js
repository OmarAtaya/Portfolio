import React from 'react';
import Navbar from '../Components/Navbar';
import PhoneNavbar from '../Components/PhoneNavbar';
import Content from '../Components/aboutContent';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="w-full flex flex-col items-center text-center min-h-screen">
        <Helmet>
          <title>About Me</title>
        </Helmet>
        <Navbar/>
        <PhoneNavbar/>
        <Content/>
    </div>
  )
}

export default About