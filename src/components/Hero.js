import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
      <div className='h-screen bg-theme'>
        <div className='grid lg:grid-cols-2 h-screen items-center'>
          <div className='h-1/2'>
            <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>

          <div >
            <h3 className='lg:text-4xl md:text-2xl text-txtT font-danc'> 
            <Typed className='lg:text-4xl md:text-2xl text-[#99E0B0] font-danc pr-1'
                strings={[
                  'Hello',
                  'Hi',
                ]}
                typeSpeed={80}
                backSpeed={60}
                loop >
              </Typed>There,</h3>
            <h3 className='lg:text-7xl md:text-4xl sm:text-2xl text-txtT font-mont flex mt-2'>I am Nokibul Alam</h3>
            <p className='lg:text-3xl text-txtS font-mont mt-2'>A FullStack Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;