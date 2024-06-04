import React from 'react';
import Navbar from '../Components/Navbar';
import PhoneNavbar from '../Components/PhoneNavbar';
import Landing from '../Components/landing';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="w-full flex flex-col items-center text-center min-h-screen">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Navbar/>
        <PhoneNavbar/>
        <Landing/>
    </div>
  )
}

export default Home