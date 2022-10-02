import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const menuItems = ([
        {
            title: "About",
            id: 1,
        },
        {
            title: "Skills",
            id: 2,
        },
        {
            title: "Projects",
            id: 3,
        },
        {
            title: "Achievement",
            id: 4,
        },
        {
            title: "Contact",
            id: 5,
        }
    ]);
    return (

        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-txtT font-mont cursor-pointer'>
            <h1 className='w-full text-3xl font-bold text-[#6bdfae]'>NKB</h1>
            <ul className='hidden md:flex'>
                {menuItems.map((item, i) =>{
                    return(
                        <li key={i} className="mx-5">
                            <Link to={`${item.id}`}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#191F3E] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#6bdfae] m-4'>NKB</h1>
                {menuItems.map((item, i) =>{
                    return(
                        <li key={i} className="p-4 border-b border-gray-600">
                            <Link to={`${item.id}`}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header;