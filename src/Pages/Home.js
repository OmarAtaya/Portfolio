import React from 'react';
import Navbar from '../Components/Navbar';
import PhoneNavbar from '../Components/PhoneNavbar';
import Landing from '../Components/landing';

function Home() {
  return (
    <div className="w-full flex flex-col items-center text-center min-h-screen">
        <Navbar/>
        <PhoneNavbar/>
        <Landing/>
    </div>
  )
}

export default Home