import React from 'react'
import Header1 from '../components/Header1'
import HeaderSec from '../components/HeaderSec'
import Footer from '../components/Footer'

const TandC = () => {
  return (<>
  <Header1></Header1>
  <HeaderSec></HeaderSec>
  <section className="container mx-auto py-10 flex-1">
        <h1 className="text-4xl font-bold text-center">Terms and Conditions</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <p className="text-gray-700">
            Welcome to the Online Table Reservation service provided by Enchanted Reservations. These terms and conditions outline the rules and regulations for the use of our service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using our service, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, please do not use our service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold">2. Reservation Process</h2>
          <p className="text-gray-700">
            Our service allows you to make online reservations for tables at participating restaurants. You must provide accurate and complete information when making a reservation. Reservations are subject to restaurant availability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold">3. Cancellation and No-Show</h2>
          <p className="text-gray-700">
            If you need to cancel a reservation, please do so in advance. Failure to cancel a reservation or repeated no-shows may result in restrictions on your ability to use our service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold">4. Privacy</h2>
          <p className="text-gray-700">
            We respect your privacy. Any information provided to us will be used for reservation purposes only and will not be shared with third parties without your consent.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:info@enchantedreservations.com" className="text-indigo-600">info@enchantedreservations.com</a>.
          </p>
        </div>
      </section>
    <Footer></Footer>
  </>
  )
}

export default TandC