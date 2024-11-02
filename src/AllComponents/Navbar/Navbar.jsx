import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
const urlLink = {
    home:'/',
    listBook:'/listBook',
    PagesToRead:'/PagesToRead',
}
const urltitle = {
    home:'Home',
    listBook:'Listed Books',
    PagesToRead:'Pages to Read',
}

    const links = <>
        <li  > <NavLink className={`px-4 py-2  rounded-md  border-[1px] border-white`} to={urlLink.home}>{urltitle.home}</NavLink> </li>
        <li  > <NavLink className={`px-4 py-2 rounded-md border-[1px] border-white`} to={urlLink.listBook}>{urltitle.listBook}</NavLink> </li>
        <li > <NavLink className={`px-4 py-2  rounded-md border-[1px] border-white`} to={urlLink.PagesToRead}>{urltitle.PagesToRead}</NavLink> </li>
         </>
    return (
        <div>
            
            <div className="navbar items-center container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        
        className="  dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 ">
            {
                links
            }
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Boi Poka</a>
  </div>
  <div className="navbar-center hidden items-center lg:flex">
    <ul className="flex  gap-6 px-1">

        {links}
     
    </ul>
  </div>
  <div className="navbar-end gap-4"> 
    <button className='bg-green-500 font-semibold text-white py-2 px-4 rounded-md'>Sign In</button>
    <button className='bg-sky-500 font-semibold text-white py-2 px-4 rounded-md'>Sign Up</button>

  </div>
</div>

        </div>
    );
};

export default Navbar;