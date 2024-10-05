import React from 'react'
import { FaLinkedin } from  "react-icons/fa"
import { FaGithub } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      {/* SVG Chess Piece */}
      <div className='flex flex-shrink-0 items-center'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="mx-2 w-10 h-10 text-neutral-300">
          <path d="M12 2c-2.206 0-4 1.794-4 4v5h-.5l-.5-1.5h-1l-.5 1.5h-1l-.5-1.5h-1l-.5 1.5h-.5v5h1v1h18v-1h1v-5h-.5l-.5-1.5h-1l-.5 1.5h-1l-.5-1.5h-1l-.5 1.5h-.5v-5h-2v-2c0-.353.024-.697.071-1.034-.201-.016-.404-.03-.607-.041C18.992 8.094 19 8.047 19 8v-2c0-2.206-1.794-4-4-4H12zm0 2c.551 0 1 .449 1 1v5h-2V5c0-.551.449-1 1-1zm-4 6h2v5h-2v-5zm10 0h2v5h-2v-5zM7 17h10v1H7v-1zm-3 2h16v1H4v-1z" />
        </svg>
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
