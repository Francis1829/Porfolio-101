import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '..//assets/LOGO2.png'
import { FaBars } from "react-icons/fa6";

function Navbar() {
    const Connect = () => {
        window.location.href = 'mailto:francissubsilica.fms@gmail.com'
      }
    const [scroll, setScroll] = useState(false)
    const ChangeColor = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', ChangeColor)

    const MenuList = [
        {
            Name: "Home",
            Paths: "/"
        },
        {
            Name: "About Me",
            Paths: "/AboutMe"
        },
        {
            Name: "Projects",
            Paths: "/Projects"
        },
        {
            Name: "Education",
            Paths: "/Education"
        },
    ]

const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click);
  };
  
  const handleclicks = () => {
    setClick(false);
  };

  return (
    <>
    <header className={scroll ? "fixed w-full top-0 font-[grotesk] z-50 scroll" : "fixed w-full top-0 font-[grotesk] z-50"}>
        <nav className='flex justify-between lg:w-auto w-full items-center lg:px-14 px-2 py-2'>
        <div
              className="r-menu lg:hidden block"
              onClick={handleClick}
            >
              {click ? "" : <FaBars size={40} className="text-white" />}
            </div>
            <div className="lg:w-[160px] w-auto flex items-center justify-center md:cursor-pointer">
                    <img src={Logo} alt="" className='lg:w-[95px] w-[65px] h-auto' />
            </div>
            
            <div className='lg:flex hidden justify-center items-center'>
            {MenuList.map((list, i) => (
                <ul className='text-white mx-3 text-xl tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li key={i} className='opacity-75 hover:opacity-100 focus:font-bold font-medium  active:text-[#251744]'>
                        {list.Name}
                    </li></Link>
                </ul>
            ))}        
             </div>
             <div onClick={Connect} className="btnn text-white text-lg lg:block hidden">
                <button className='px-7 py-3 border border-white rounded-md hover:bg-white  hover:text-black duration-300 ease-in-out'>Let's Connect!</button>
             </div>

             <div className={`lg:hidden flex flex-col items-center z-50 bg-[url('../src/assets/Bg-theme.png')] bg-black absolute w-full top-0 pl-3 py-10 h-[660px] overflow-y-auto transition-all ${click ? "left-0" : "left-[-100%]"} duration-500`}>
            {MenuList.map((list, i) => (
                <ul className='text-white my-1 text-xl font-medium tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li onClick={handleclicks} key={i} className='opacity-75 hover:opacity-100 active:opacity-100 '>
                        {list.Name}
                    </li></Link>
                </ul>
            ))}   
              <div className="btnn  text-white text-base mt-7">
                <button onClick={Connect} id='Contact' className='px-7 py-3 mx-3 border border-white rounded-md hover:bg-white  hover:text-black duration-300 ease-in-out'>Let's Connect!</button>
             </div>
             </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar