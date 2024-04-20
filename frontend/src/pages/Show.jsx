import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackArrow from "../components/BackArrow"
import Footer from "../components/Footer"
import Header1 from "../components/Header1"
import HeaderSec from "../components/HeaderSec"


const Show = () => {
  const [reservation,setReservation]=useState({});
  const{id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3360/reservations/${id}`).then((response)=>{
      
      const data= response.data;
      if(Array.isArray(response.data) && response.data.length>0){

        setReservation(data[0]);

      }

      
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
    <Header1></Header1>
    <HeaderSec/>
    <div className="p-4">
    <BackArrow />
    <h1 className='text-3xl my-4' style={{ color: '#25938b' }}>Reservation Details</h1>
    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
      <div className="card max-w-sm w-full bg-white rounded-lg shadow-lg">
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={reservation._id}
                className="form-control"
                disabled
                />
            </div>
            <div className="mb-3">
              <label htmlFor="reservedDate" className="form-label">Reserved Date:</label>
              <input
                type="text"
                id="reservedDate"
                name="reservedDate"
                value={reservation.reservedDate}
                className="form-control"
                disabled
                />
            </div>
            <div className="mb-3">
              <label htmlFor="bookingDate" className="form-label">Booking Date:</label>
              <input
                type="text"
                id="bookingDate"
                name="bookingDate"
                value={reservation.bookingDate}
                className="form-control"
                disabled
                />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">Time:</label>
              <input
                type="text"
                id="time"
                name="time"
                value={reservation.time}
                className="form-control"
                disabled
                />
            </div>
            <div className="mb-3">
              <label htmlFor="partySize" className="form-label">Party Size:</label>
              <input
                type="text"
                id="partySize"
                name="partySize"
                value={reservation.partySize}
                className="form-control"
                disabled
                />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmation" className="form-label">Table Id:</label>
              <input
                type="text"
                id="confirmation"
                name="confirmation"
                value={reservation.tableId}
                className="form-control"
                disabled
                />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
                </>
  )
}

export default Show