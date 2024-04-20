
import { useState,useEffect } from 'react';
import Spinner from '../components/spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import Footer from '../components/Footer';
import Header1 from '../components/Header1';
import HeaderSec from '../components/HeaderSec';
 import { useParams } from 'react-router-dom';


 const AdminView = () => {
  const [reservations,setReservations]=useState([]);
  const [loading,setLoading]= useState(false);
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8080/reservations/customer/${id}`).then((response)=>{
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
  <div><div className="container">
      <table className="table table-sm table-bordered table-hover text-center mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Reserved Date</th>
            <th>Booking date</th>
            <th>Time</th>
            <th>Party Size</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reservation.reservedDate}</td>
              <td>{reservation.bookingDate}</td>
              <td>{reservation.time}</td>
              <td>{reservation.partySize}</td>
              <td className="border border-slate-700 px-4 py-2">
            <div className="flex justify-center items-center gap-x-4">
              <Link to={`/reservations/view/${reservation._id}`}>
                <BsInfoCircle className="text-2xl text-green-800" />
              </Link>
              <Link to={`/reservations/edit/${reservation._id}`}>
                <AiOutlineEdit className="text-yellow-600 text-2xl" />
              </Link>
              <Link to={`/delete/${reservation._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600" />
              </Link>
            </div>
          </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
     
      <Link  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 ps-96 ml-96 focus:outline-none focus:ring focus:ring-blue-300" to='/reservations/create' >
        New Reservation
      </Link>
   
      </div>
    </div></div>
    <div><p><br /><br /><br /><br /><br /><br /></p></div>
 <Footer></Footer>
</>)
    
  
}

export default AdminView;