import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeftCircleFill} from 'react-icons/bs'

const BackArrow = ({destination='/reservations'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className="bg-sky-800 hover:bg-sky-600 text-white px-4 py-2 rounded-full inline-flex items-center transition duration-300 ease-in-out">
        <BsArrowLeftCircleFill className="text-2xl mr-2" />
    
      </Link>
        
    </div>
  )
}

export default BackArrow