import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
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
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
        </div>

        <div>

        </div>


      </div>
    </div>
  )
}

export default Hero;