import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {
   const cart = useSelector((state) => state.cart); 

    return (
        <div className='fixed top-0 z-50 bg-slate-900 w-full'>
        <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto  '>

           <NavLink to="/">
             <div className='ml-5 h-[100px] w-[400px] '>
             <img src="../logo2.png" alt="logo" height={100} width={200}  />
            </div>
             </NavLink>

            <div className='flex flex-row items-center font-medium text-slate-100 space-x-6'>
                <NavLink to="/">
                   <p>
                    Home
                   </p>
                </NavLink>
             
                <NavLink to="/cart">
                    <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {
                    cart.length > 0 ?
                     (<span className='bg-green-600 absolute -top-1 -right-2 text-[12px] w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white'>{
                      cart.length} 
                    </span>):
                     (<div></div>)
                    }
                    </div>
                </NavLink>
            
                 
            </div>

        </nav>
        </div>
    )
}

export default Navbar
