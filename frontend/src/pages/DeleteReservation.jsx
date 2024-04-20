import BackArrow from "../components/BackArrow";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import HeaderSec from "../components/HeaderSec";
import { useSnackbar } from "notistack";

 
const DeleteReservation=()=>{
  const navigate=useNavigate();
  const {id}= useParams();
  const{enqueueSnackbar}=useSnackbar();
  const HandleDelete=()=>{
     axios.delete(`http://localhost:8080/reservations/${id}`)
     .then(()=>{
       enqueueSnackbar('Deleted Successfully',{variant:'success'})
       navigate('/reservations');

     })
     .catch((error)=>{console.log(error);
      alert("There was an Error")
     })
  }
  
return(
  <>
  <Header1></Header1>
  <HeaderSec></HeaderSec>
  <div className="p-4">
    <BackArrow/>
    <h1 className='text-3xl my-4' style={{ color: '#25938b' }}>Delete Reservation</h1>

    <div className=' flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto' >
      <h3 className="text-2xl">Do you wish to Delete the reservation</h3>
      <button className="pp-4 bg-red-600 text-white m-8 w-full"  onClick={HandleDelete} >Yes</button>
    </div>
    <div><p><br /><br /><br /><br /><br /><br /></p></div>
    <Footer ></Footer>
  </div>
  </>
)

}

export default DeleteReservation;