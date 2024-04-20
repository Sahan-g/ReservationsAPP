import React, { useState } from 'react'
import BackArrow from '../components/BackArrow'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/spinner'
import Footer from '../components/Footer'
import { useSnackbar } from 'notistack'
import Header1 from '../components/Header1'
import HeaderSec from '../components/HeaderSec'

const Create = () => {

  const  [reservedDate,setReservedDate]=useState('');
  const [time, setTime]=useState('');
  const [partySize,setPartySize]=useState(1);
  const [tableId,setTableId]=useState(0);
  const [loading,setLoading]=useState();
  const navigate=useNavigate();
  const [customerID,setCustomerID]=useState('652c1b6861dfd2e8ths86e19190');
  const [bookingDate,setBookingDate]=useState(()=>{
    const current= new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return date;
  })
  const{enqueueSnackbar}=useSnackbar();

  const handleReservation=()=>{

    // const current= new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    // setBookingDate(date);
    // console.log(date);


    if(!reservedDate ){

      enqueueSnackbar('Date is required',{variant:'warning'})
    }
    else if(!time){
      enqueueSnackbar('Time is required',{variant:'warning'})
    }
    else if(!tableId){
      enqueueSnackbar('Table Number is required',{variant:'warning'})
    }
    else if(!partySize){
      enqueueSnackbar('Party size required',{variant:'warning'})
    }
      
     else{

      
      const data={
        customerID,bookingDate,
        reservedDate,time,
        partySize,tableId
      }
    setLoading(true);
    axios.post ('http://localhost:8080/reservations/',data)
    .then(()=>{
      console.log(data);
      setLoading(false);
      enqueueSnackbar('Reserved Successfully',{variant:'success'})
      navigate('/reservations'); 
    }).catch((error)=>{
      alert('An error Occured');
      enqueueSnackbar('Error ',{variant:'error'})
      console.log(error);
    })
  }
  }
  return (
    <>
    <Header1></Header1>
    <HeaderSec ></HeaderSec>
    <div className='p-4 bg-gray-200'>
  <BackArrow></BackArrow>
  <h1 className='text-3xl my-4' style={{ color: '#25938b' }}>Create Reservation</h1>
  {loading ? <Spinner /> : ''}
  <div>

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
    <div className='my-4'>
    <button
  className='p-2 bg-green-300 w-80 hover:bg-green-400 active:bg-green-500 text-white rounded-lg'
  onClick={handleReservation}
>
  Proceed
</button>
  </div>
    </div>
  </div>
  <Footer></Footer>
</div>
        </>

  
  
  )
}

export default Create