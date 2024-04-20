import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSec = () => {
  return (
    <div>
       <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul className="flex space-x-4">
          <li><Link to="/main" className="text-white hover:underline">Home</Link></li>
          <li><Link to='/reservations' className="text-white hover:underline"> My Reservations</Link></li>
          <li><Link to='/about'  className="text-white hover:underline">About</Link></li>
          <li><Link  to='/TnC' className="text-white hover:underline">T&C</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default HeaderSec