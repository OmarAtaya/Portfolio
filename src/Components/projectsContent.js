import React from 'react';
import Goquake from '../assets/goquake.png';
import Goweather from '../assets/goweather.png';
import Textilreinigung from '../assets/textilreinigung-malah.png';
import Neonwave from '../assets/neonwave.png';
import Alphamale from '../assets/Alphamale.png';

function projectsContent() {
  return (
    <div className="my-20 w-2/3 font-bold flex flex-col items-center justify-center gap-10 text-sm md:text-base lg:text-xl">
        <div className="bg-[#c0b5ae] flex flex-col rounded-md gap-5 pb-5 shadow-xl">
            <img src={Textilreinigung} alt='' className="rounded-md"/>
            <p>TEXTILREINIGUNG-MALAH</p>
            <p>Developed and hosted an informational website for a laundry shop located in Vienna, it included the services they provided along with the prices for those services. </p>
            <a href='https://textilreinigung-malah.com/' className="text-[#747372]" target="_blank" rel="noreferrer">textilreinigung-malah.com</a>
        </div>
        <div className="bg-[#c0b5ae] flex flex-col rounded-md gap-5 pb-5 shadow-xl">
            <img src={Goweather} alt='' className="rounded-md"/>
            <p>GOWEATHER</p>
            <p>Developed and hosted an informational website that provides the users with up to date information about current weather data for the selected location with an interactive map that shows percipitation</p>
            <a href='https://goweather-demo.netlify.app/' className="text-[#747372]" target="_blank" rel="noreferrer">goweather-demo.netlify.app</a>
        </div>
        <div className="bg-[#c0b5ae] flex flex-col rounded-md gap-5 pb-5 shadow-xl">
            <img src={Goquake} alt='' className="rounded-md"/>
            <p>GOQUAKE</p>
            <p>Developed and hosted this website that includes information about earthquakes that occured in the past 30 days in a selected area</p>
            <a href='https://goquake.netlify.app/' className="text-[#747372]" target="_blank" rel="noreferrer">goquake.netlify.app</a>
        </div>
        <div className="bg-[#c0b5ae] flex flex-col rounded-md gap-5 pb-5 shadow-xl">
            <img src={Neonwave} alt='' className="rounded-md"/>
            <p>NEONWAVE</p>
            <p>Developed a full-fledged ecommerce website for my business NeonWave that includes a payment gateway</p>
            <ul>
                <li>Technologies:</li>
                <li>React (Redux)</li>
                <li>HTML & CSS3(Bootstrap & Tailwind)</li>
                <li>Node.js (Express)</li>
                <li>MongoDB</li>
                <li>Stripe-API</li>
            </ul>
            <a href='https://github.com/OmarAtaya/Neonwave.ae' className="text-[#747372]" target="_blank" rel="noreferrer">github.com/OmarAtaya/Neonwave.ae</a>
        </div>
        <div className="bg-[#c0b5ae] flex flex-col rounded-md gap-5 pb-5 shadow-xl">
            <img src={Alphamale} alt='' className="rounded-md"/>
            <p>ALPHA MALE</p>
            <p>Developed a full-fledged ecommerce website with a payment gateway and a live internal order managing tool </p>
            <ul>
                <li>Technologies:</li>
                <li>React (Redux)</li>
                <li>HTML & CSS3(Bootstrap & Tailwind)</li>
                <li>Node.js (Express)</li>
                <li>MongoDB</li>
                <li>Stripe-API</li>
            </ul>
        </div>
    </div>
  )
}

export default projectsContent