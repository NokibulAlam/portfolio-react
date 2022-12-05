import React from 'react'; //data-aos="fade-down" data-aos-duration="1000";
import C from '../images/ICONS/C.png';
import cPlus from '../images/ICONS/c++.png';
import JS from '../images/ICONS/javascript.png';
import HTML from '../images/ICONS/HTML.png';
import Nodejs from '../images/ICONS/nodejs.png';
import Tailwind from '../images/ICONS/Tailwind_CSS.png';
import Bootstrap from '../images/ICONS/bootstrap.png';
import CSS from '../images/ICONS/CSS.png';
import MySQL from '../images/ICONS/MySQL.png';
import MongoDB from '../images/ICONS/MongoDB.png';
import Express from '../images/ICONS/Express.png';
import Reactj from '../images/ICONS/React.png';
import Redux from '../images/ICONS/Redux.png';
import Github from '../images/ICONS/Github.png';

const Skills = () => {

  const languages = ([
    {
      name: "C",
      progress: "85%",
      img: C,
    },
    {
      name: "C++",
      progress: "85%",
      img: cPlus,
    },
    {
      name: "JavaScript",
      progress: "80%",
      img: JS,
    },
    {
      name: "HTML",
      progress: "90%",
      img: HTML,
    },
    {
      name: "CSS",
      progress: "80%",
      img: CSS,
    },
    {
      name: "Bootstrap",
      progress: "80%",
      img: Bootstrap,
    },
    {
      name: "TailWind CSS",
      progress: "70%",
      img: Tailwind,
    },
    {
      name: "MySQL",
      progress: "60%",
      img: MySQL,
    },
    {
      name: "MongoDB",
      progress: "65%",
      img: MongoDB,
    },
    {
      name: "NodeJs",
      progress: "75%",
      img: Nodejs,
    },
    {
      name: "Express",
      progress: "70%",
      img: Express,
    },
    {
      name: "React",
      progress: "75%",
      img: Reactj,
    },
    {
      name: "Redux",
      progress: "60%",
      img: Redux,
    },
    {
      name: "Github",
      progress: "70%",
      img: Github,
    },
  ]);


  return (
    <div name="skills" className='w-full bg-[rgb(36,36,36)] flex relative flex-col text-center md:text-left xl:flex-row
     xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl' data-aos="fade-down" data-aos-duration="1000">Skills</h3>
      <h3 className='absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm' data-aos="fade-down" data-aos-duration="1000">Hover over a skill for current profieciency </h3>

      <div className='grid grid-cols-4 gap-x-10 gap-y-5 lg:pt-14' data-aos="flip-left" data-aos-duration="2000">
        {languages.map(({ name, progress, img }) => (

          <div className='group relative flex cursor-pointer'>
            <img src={img} alt='Language C' className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out' />

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-gray-800 opacity-100'>{progress}</p>
              </div>
            </div>
          </div>

        ))}
      </div>

    </div>

  )
}

export default Skills;