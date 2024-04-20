import React from 'react'
import img from '../components/images/logo.png'

const Header1 = () => {
  return (
    <div className="bg-white p-2 shadow-md flex items-center">
  <img src={img} alt="Logo" className="w-12 h-12 mr-2" />
  <h1 style={{ fontFamily: 'cursive', color: '#25938b' }} className="text-xl">
    Enchanted Foods
  </h1>
</div>



  )
}

export default Header1