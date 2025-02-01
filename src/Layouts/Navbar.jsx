import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)
  return (
    <div className="md:w-11/12 md:mx-auto  ">
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost md:text-4xl text-3xl font-bold">Plantzo</a>
        </div>
        <div>
            <ul className="hidden md:flex gap-5 text-base font-semibold mr-5">
            <li>
                <NavLink>Home</NavLink>
            </li>
            <li>
                <NavLink>Shop</NavLink>
            </li>
            <li>
                <NavLink>Blog</NavLink>
            </li>
            <li>
                <NavLink>Pages</NavLink>
            </li>
            <li>
                <NavLink>Contact</NavLink>
            </li>
            </ul>
        </div>
        <div className="flex gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Dashboard</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="md:hidden btn btn-ghost " onClick={()=>setIsOpen(!isOpen)}>{isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}</button>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-50 bg-white shadow-lg transform ${isOpen? "translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        
        <ul className="flex flex-col p-5 text-base font-semibold gap-3">
            <li>
                <NavLink onClick={()=>setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setIsOpen(false)}>Shop</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setIsOpen(false)}>Blog</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setIsOpen(false)}>Pages</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setIsOpen(false)}>Contact</NavLink>
            </li>
            </ul>
      </div>
    </div>
  );
};

export default Navbar;
