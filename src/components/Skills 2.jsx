import React from 'react'; //data-aos="fade-down" data-aos-duration="1000";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

    const languages = ([
        {
            name: "C/C++",
            progress: "80%",
        },
        {
            name: "JavaScript",
            progress: "85%",
        },
        {
            name: "HTML",
            progress: "90%",
        },
        {
            name: "CSS",
            progress: "75%",
        },
        {
            name: "Bootstrap",
            progress: "70%",
        },
        {
            name: "TailWind CSS",
            progress: "65%",
        },
        {
            name: "MySQL",
            progress: "80%",
        },
        {
            name: "MongoDB",
            progress: "65%",
        },
    ]);

    const percentage = 70;

    return (
        <div name="skills" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
            <div className='flex flex-col justify-center items-center w-full h-full lg:space-x-4'>

                <div className='flex flex-col justify-center my-14'>
                    <p className='text-4xl text-txtT font-bold inline border-b-4 border-gray-600 rounded'>
                        Skills
                    </p>
                </div>

                <div className='max-w-screen-lg w-full grid sm:grid-cols-2 items-start lg:gap-14 px-4'>
                    
                    <div>
                        <h3 className='text-3xl font-mont text-white text-center mb-6'>Language</h3>
                        {languages.map(({ name, progress }, i) => (
                            <div key={i} className="mb-6">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-[#6bdfae]">{name}</span>
                                    <span className="text-sm font-medium text-[#6bdfae]">{progress}</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: `${progress}` }}></div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className=''>
                        <h3 className='text-3xl font-mont text-white text-center mb-6'>Framework & Tools</h3>
                        <div className='grid grid-cols-2 text-center'>
                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        rotation: 1,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',

                                        // Text size
                                        textSize: '16px',

                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',

                                        // Colors
                                        pathColor: `rgb(107 114 128)`,
                                        textColor: '#6bdfae',
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                                <p className='text-white'>NodeJs</p>
                            </div>

                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        rotation: 1,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',

                                        // Text size
                                        textSize: '16px',

                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',

                                        // Colors
                                        pathColor: `rgb(107 114 128)`,
                                        textColor: '#6bdfae',
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                                <p className='text-white'>Express</p>
                            </div>

                            <div style={{ width: 100, height: 100 }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        rotation: 1,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',

                                        // Text size
                                        textSize: '16px',

                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',

                                        // Colors
                                        pathColor: `rgb(107 114 128)`,
                                        textColor: '#6bdfae',
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                                <p className='text-white'>React</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills;