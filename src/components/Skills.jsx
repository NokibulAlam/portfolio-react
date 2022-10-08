import React from 'react'; //data-aos="fade-down" data-aos-duration="1000"

const Skills = () => {

  const languages = ([
    {
      name: "C/C++",
      progress: "80%",
      width: "80%"
    },
    {
      name: "JavaScript",
      progress: "85%",
      width: "85%"
    },
    {
      name: "HTML",
      progress: "90%",
      width: "90%"
    },
    {
      name: "CSS",
      progress: "75%",
      width: "75%"
    },
    {
      name: "Bootstrap",
      progress: "70%",
      width: "70%"
    },
    {
      name: "TwilWind CSS",
      progress: "55%",
      width: "55%"
    },
    {
      name: "C",
      progress: "80%",
      width: "80%"
    },
  ]);

  return (
    <div name="skills" className='w-full h-screen bg-theme'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='text-center pb-8 pl-4'>
          <p className='text-4xl text-txtT font-bold inline border-b-4 border-gray-600 rounded'>
            Skills
          </p>
        </div>

        <div className='max-w-[1000px] w-full h-full grid sm:grid-cols-2 gap-8 px-4 items-start'>
          <div>
            {languages.map((lan, i) => (
              <div key={i}> 
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700 dark:text-white">{lan.name}</span>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">{lan.progress}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;