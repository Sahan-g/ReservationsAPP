import React from 'react'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import HeaderSec from '../components/HeaderSec'
import img1 from '../components/images/about.jpg'

const About = () => {
  return (<>
    <Header1></Header1>
    <HeaderSec></HeaderSec>
    
<section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 text-center">About Us</h2>
        <p className="text-gray-700 text-center mt-2">Discover the story behind Enchanted Foods.</p>

        <div className="flex flex-col md:flex-row mt-10">
            <div className="md:w-1/2 p-4">
                <img src={img1} alt="About Enchanted Foods" className="rounded-lg shadow-md"></img>
            </div>
            <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-2">Our Story</h3>
                <p className="text-gray-700">Enchanted Foods was founded with a passion for exquisite cuisine and a love for bringing people together through food. Our journey started in a small kitchen, experimenting with flavors and perfecting recipes. Today, we are proud to serve our culinary creations to food enthusiasts from around the world.</p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">Our Commitment</h3>
                <p className="text-gray-700">At Enchanted Foods, we are committed to using the finest, locally-sourced ingredients to create dishes that are not only delicious but also sustainable. We believe in the magic of food to connect people and enrich lives. Our team of talented chefs and staff work tirelessly to provide you with an enchanting dining experience.</p>
            </div>
        </div>
    </div>
</section>

    <Footer></Footer>
  </>
  )
}

export default About