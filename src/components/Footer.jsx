import React from 'react';
import Typed from 'react-typed';
import {FaLinkedin, FaMobile, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Footer = () => {

  return (
    <div
      name="home"
      className="h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:space-x-4">

        <div className="flex flex-col justify-center h-full">
          <h4 className='text-3xl sm:text5xl font-danc text-[#99E0B0]'>
            <Typed
              strings={[
                'Hello',
                'Hi',
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop >
            </Typed> There,</h4>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Nokibul Alam
          </h2>
          <a href='https://www.linkedin.com/in/nokibul-alam/' className="flex text-gray-300 py-4 max-w-md space-x-4 items-center">
            <FaLinkedin size={25}/><span>linkedin.com/in/nokibul-alam/</span>
          </a>
          <a href='https://github.com/NokibulAlam' className="flex text-gray-300 py-4 max-w-md space-x-4 items-center">
            <FaGithub size={25}/><span>github.com/NokibulAlam</span>
          </a>
          <a href='mailto:nokibul.alam02@gmail.com' className="flex text-gray-300  max-w-md space-x-4 items-center">
            <MdEmail size={25}/><span>nokibul.alam02@gmail.com</span>
          </a>
          <a href='tel:+8801622544585' className="flex text-gray-300 py-4 max-w-md space-x-4 items-center">
            <FaMobile size={25}/><span>+880-1622544585</span>
          </a>
        </div>

        <div>

        </div>


      </div>
    </div>
  )
}

export default Footer;