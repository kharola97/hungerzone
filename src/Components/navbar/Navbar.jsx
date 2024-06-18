import React from 'react'
import logo from "../../assets/food-logo.png"
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
         <div className="flex justify-between items-center">
          <div>
            <a href="#" className='flex items-center gap-3 text-2xl  sm:text-3xl font-bold'>
              <img src={logo} alt="Hunger Zone" className='w-10' />
              Hunger
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <DarkMode/>
            </div>
            <ul className=' hidden sm:flex sm:gap-4 uppercase'>
              <li>
                 <a href="#" className='inline-block py-4 px-4 hover:text-primary duration-200'>Home</a> 
                 </li>
              <li> 
                <a href="#" className='inline-block py-4 px-4 hover:text-primary duration-200'>About</a> 
                </li>
              <li>
                 <a href="#" className='inline-block py-4 px-4 hover:text-primary duration-200'>Contact</a> 
                 </li>
            </ul>
            <button
            className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2 hover:scale-105 duration-300 '
            >order
            <FaCartShopping className='text-xl text-white drop-shadow-md cursor-pointer'/>
            </button>
          </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Navbar