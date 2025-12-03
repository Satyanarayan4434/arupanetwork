import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function Navbar() {

  // Logic for toggling mobile menu
  const [isOpen, setIsOpen] = useState(false); 
  const handleClose = () => setIsOpen(false);

  // Logic for active link bottom border
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 font-bold border-b-2 border-red-600 pb-1"
      : "hover:text-gray-300 transition duration-200 pb-1";

  return (

    // REsponsive Navbar without using AI. with AI do lot faster. 
    <nav className="bg-black text-white relative shadow-md z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </NavLink>
          </div>

          {/* Desktop Navigation Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-semibold tracking-wide">
            <NavLink to="/" className={linkClass}>HOME</NavLink>
            <NavLink to="/man" className={linkClass}>MAN</NavLink>
            <NavLink to="/woman" className={linkClass}>WOMAN</NavLink>
            <NavLink to="/kids" className={linkClass}>KIDS</NavLink>
            <NavLink to="/sale" className={linkClass}>SALE</NavLink>
          </div>

          {/* Desktop Buttons Hidden on Mobile*/}
          <div className="hidden md:flex items-center gap-4">
             <NavLink 
               to="/login" 
               className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition font-bold"
             >
               Login
             </NavLink>
             <NavLink 
               to="/signup" 
               className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition font-bold"
             >
               Sign Up
             </NavLink>
          </div>

          {/* Hamburger Menu Icon Visible ONLY on Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 px-4 pt-4 pb-8 space-y-6 absolute w-full left-0 top-20 border-t border-gray-800">
           <div className="flex flex-col items-center space-y-6 text-xl font-semibold">
              <NavLink to="/" onClick={handleClose} className={linkClass}>HOME</NavLink>
              <NavLink to="/man" onClick={handleClose} className={linkClass}>MAN</NavLink>
              <NavLink to="/woman" onClick={handleClose} className={linkClass}>WOMAN</NavLink>
              <NavLink to="/kids" onClick={handleClose} className={linkClass}>KIDS</NavLink>
              <NavLink to="/sale" onClick={handleClose} className={linkClass}>SALE</NavLink>
           </div>
           <div className="flex flex-col gap-4 px-8 mt-4">
             <NavLink 
                to="/login" 
                onClick={handleClose}
                className="w-full py-3 text-center border border-white rounded text-white font-bold hover:bg-white hover:text-black transition"
             >
               Login
             </NavLink>
             <NavLink 
                to="/signup" 
                onClick={handleClose}
                className="w-full py-3 text-center bg-white text-black rounded font-bold hover:bg-gray-200 transition"
             >
               Sign Up
             </NavLink>
           </div>
        </div>
      )}
    </nav>
  );
}