import React from 'react';
import Photo from '../assets/Photo.png';

function landing() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-5 mb-8">
        <img src={Photo} className=" w-3/12" alt=''/>
        <div className="w-2/3 font-semibold">
            <p className="text-sm md:text-base lg:text-xl">
                As a recent Computer Science graduate from Curtin University Dubai, I bring a robust blend of academic excellence and hands-on experience in web/app development, UI/UX design, and digital marketing. My journey includes impactful roles at Amalthea Capital and Bianca-nera, and founding NeonWave during the pandemic, showcasing my entrepreneurial spirit and ability to thrive under pressure. I’m eager to leverage my skills in frontend design and development to contribute to innovative projects within a dynamic professional environment.
            </p>
        </div>
    </div>
  )
}

export default landing