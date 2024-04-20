
import { useState,useEffect } from 'react';
import Spinner from '../components/spinner';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import Footer from '../components/Footer';
import Header1 from '../components/Header1';
import HeaderSec from '../components/HeaderSec';
 
const Home = () => {

  
  const [reservations,setReservations]=useState([]);
  const [loading,setLoading]= useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:3360/reservations').then((response)=>{
      setReservations(response.data.data);
      setLoading(false);
      console.log("data fetch complete");
    }).catch((error)=>{
      console.log(error.message);
      setLoading(false);
    })
  },[]);




  return (<>
  <Header1></Header1>
  <HeaderSec></HeaderSec>
  <div className='h-10 '>

  </div>
  <div> <Link  style={{'margin-left':'1100px','margin-bottom':'40px'}} className="bg-green-500  text-white p-2 rounded-md hover:bg-green-600 ml-96 ps-96 ml-96 focus:outline-none focus:ring focus:ring-blue-300" to='/reservations/create' >
        New Reservation
      </Link><div className="container">
      <table className="min-w-full bg-white border border-gray-300 mt-4 shadow-md rounded-md">
  <thead>
    <tr>
    <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Id</th>
      <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Reserved Date</th>
      <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Booking Date</th>
      <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Time</th>
      <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Party Size</th>
      <th className="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-700 uppercase tracking-wider">Actions</th>
    </tr>
  </thead>
  <tbody>
    {reservations.map((reservation, index) => (
      <tr key={index}  className='hover:bg-gray-200'>

        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
        <td className="px-6 py-4 whitespace-nowrap">{reservation.reservedDate}</td>
        <td className="px-6 py-4 whitespace-nowrap">{reservation.bookingDate}</td>
        <td className="px-6 py-4 whitespace-nowrap">{reservation.time}</td>
        <td className="px-6 py-4 whitespace-nowrap">{reservation.partySize}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <Link to={`/reservations/view/${reservation._id}`} className="text-green-600 hover:text-green-800 mx-2">
              <BsInfoCircle className="text-2xl" />
            </Link>
            <Link to={`/reservations/edit/${reservation._id}`} className="text-yellow-600 hover:text-yellow-800 mx-2">
              <AiOutlineEdit className="text-2xl" />
            </Link>
            <Link to={`/delete/${reservation._id}`} className="text-red-600 hover:text-red-800 mx-2">
              <MdOutlineDelete className="text-2xl" />
            </Link>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      <div>
     
     
   
      </div>
    </div></div>
    <div><p><br /><br /><br /><br /><br /><br /></p></div>
 <Footer></Footer>
</>)
    
  
}

export default Home;