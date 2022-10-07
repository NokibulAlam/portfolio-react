import React from 'react';
import Nokib from '../images/Untitled-1.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-[#090809] to-gray-800 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-grey-800'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center'>
          <div className='font-bold pt-5'>
            <img src={Nokib} alt="Nokib.png" className='mx-auto'/>
          </div>
          <div>
            <p className='text-3xl py-4'>Hi. I'm Nokib, nice to meet you. Please take a look around.</p>
            <p>I'm a full stack web developer. I design and code beautifully simple things, and I love what I do. 
              I'm also passionate about Street Photography and won some prizes from exhibition. 
              I have a wedding photography “Dream Studio” team. We have been working together for 6 years.
             <br/> I’m always curious to learn more when it comes to new technologies and creative coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;