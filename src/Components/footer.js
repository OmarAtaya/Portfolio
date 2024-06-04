import React from 'react';
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function footer() {
  return (
    <div className="w-full bg-[#c0b5ae] p-7">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="font-bold">Contact Me</h2>
        <p className="font-semibold">- For More Information -</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt color='#323232' size={15}/>
            <p>+974 70443379</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MdEmail color='#323232' size={20}/>
            <p>omar_ataya@outlook.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaLocationArrow color='#323232' size={15}/>
            <p>Doha, Qatar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer