import React from 'react'
import Nokib from '../images/Untitled-1.png';

const About2 = () => {
    return (
        <div className='w-full h-screen bg-[rgb(36,36,36)] flex relative flex-col  
     justify-center xl:space-y-0 mx-auto items-center'>

            <h3 className='absolute top-40 uppercase tracking-[20px] text-gray-500 text-4xl' data-aos="fade-down" data-aos-duration="1000">About</h3>

            <div className='absolute max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center'>
                <div className='font-bold pt-5' data-aos="fade-right" data-aos-duration="1000">
                    <img src={Nokib} alt="Nokib.png" className='mx-auto' />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <p className='text-3xl text-txtT py-4'>Hi. I'm Nokib. Well-organised, independent and a family oriented happy person.</p>
                    <p className='text-white'>I'm a full stack web developer. I design and code beautifully simple things, and I love what I do. <br />
                        I'm also passionate about Street Photography and won some prizes from exhibition.
                        I have a wedding photography team named “Dream Studio”. We have been working together for 6 years.
                        <br /> I’m always curious to learn more when it comes to new technologies and creative coding.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About2;