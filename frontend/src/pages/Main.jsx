import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import img1 from '../components/images/main_menu.jpg'
import img2 from '../components/images/food_icon.png'
import HeaderSec from '../components/HeaderSec'




const Main = () => {
  


  return (

    <>
    
    <Header1></Header1>
    <HeaderSec></HeaderSec>
    
    <img src={img1} alt="Main menu image" style={{ width: '1200px' }} className="h-96 ml-24 mt-14 mr-24 flex-center" />
    <div className='flex'><div style={{ width: '800px' }} className='w-96 ml-40 h-35 flex items-center text-justify mt-10'>
        <h2 className='font-mono'>
        Step into a world of culinary wonder at Enchanted Eats, where fantasy meets fine dining.
        This imaginary restaurant is a feast for the senses, designed to transport you to a
        magical realm with its captivating ambiance, exquisite cuisine, and enchanting décor.
        </h2>
    </div>
    <div>
        <img src={img2} alt="item 2" className='m-4' />
    </div>
    </div>

    <Footer></Footer>
    </>
  )
}

export default Main