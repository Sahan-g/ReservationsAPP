import React, { useState,useEffect } from 'react'
import BackArrow from '../components/BackArrow'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Spinner from '../components/spinner'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import HeaderSec from '../components/HeaderSec'
import { useSnackbar } from 'notistack'
const Edit = () => {

  const [reservedDate,setReservedDate]=useState('');
  const [time, setTime]=useState('');
  const [partySize,setPartySize]=useState(1);
  const [tableId,setTableId]=useState(0);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [customerID,setCustomerID]=useState('652c1b6861dfd2e8ths86e19190');//
  const [bookingDate,setBookingDate]=useState('');
  const {id}=useParams();
  const{enqueueSnackbar}=useSnackbar();
  useEffect(() => {
    axios.get(`http://localhost:8080/reservations/${id}`).then((response) => {
      setBookingDate(response.data[0].bookingDate);
      setCustomerID(response.data[0].customerID);
      setReservedDate(response.data[0].reservedDate);
      setPartySize(response.data[0].partySize);
      setTableId(response.data[0].tableId);
      setTime(response.data[0].time);
    }).catch((error) => {
      alert('An error occurred');
      console.log(error);
    });
  }, [id]);

  const handleReservation=()=>{

    const formattedReservedDate = new Date(reservedDate);
  const yyyy = formattedReservedDate.getFullYear();
  const mm = String(formattedReservedDate.getMonth() + 1).padStart(2, '0'); // Add 1 to the month since months are 0-indexed
  const dd = String(formattedReservedDate.getDate()).padStart(2, '0');
  const formattedDate = `${yyyy}-${mm}-${dd}`;

    const data={
      customerID,bookingDate,
      reservedDate:formattedDate,time,
      partySize,tableId
    }
    
    setLoading(true);
    axios.put (`http://localhost:8080/reservations/${id}`,data)
    .then(()=>{
      console.log(data);
      setLoading(false);
      enqueueSnackbar('Edited Successfully',{variant:'success'})
      navigate('/reservations'); 
    }).catch((error)=>{
      enqueueSnackbar('error',{variant:'error'});
      console.log(error);
    })
  }
  return (
    <>
   <Header1></Header1>
<HeaderSec></HeaderSec>
<div className='p-4'>
  <BackArrow></BackArrow>
  <h1 className='text-3xl my-4' style={{ color: '#25938b' }}>Edit Reservation</h1>
  {loading ? <Spinner /> : ''}
  <div className='flex flex-col border-2 border-sky-400 rounded-xl w-96 p-4 mx-auto shadow-lg bg-white'>
    <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Date:</label>
      <input
        type="date"
        value={reservedDate}
        onChange={(e) => {
          setReservedDate(e.target.value);
        }}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Time:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Party Size:</label>
      <input
        type="number"
        value={partySize}
        onChange={(e) => {
          setPartySize(e.target.value);
        }}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Table No:</label>
      <input
        type="number"
        value={tableId}
        onChange={(e) => {
          setTableId(e.target.value);
        }}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <button
  className='p-2 bg-green-300 w-80 hover:bg-green-400 active:bg-green-500 text-white rounded-lg'
  onClick={handleReservation}
>
  Save
</button>

  </div>
  <Footer></Footer>
</div>
</>
  )
}

export default Edit;