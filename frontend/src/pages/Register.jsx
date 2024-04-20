import { useState } from 'react';
import img1 from '../components/images/logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Register = () => {

    const [firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const{enqueueSnackbar}=useSnackbar();

const handleClick=async()=>{

    const user ={
        firstname,lastname,email,password
    }
    if(!firstname || !lastname || !email || !password){
      enqueueSnackbar('All the fields Are required',{variant:'info'})


    }else{
    
      const {data}= await axios.post('http://localhost:3360/signup',user,
      { withCredentials: true })
  
        const{message,success}=data;
        console.log(user);
        if(success){
          
          navigate('/main');
          
        }
        enqueueSnackbar(message,{variant:'success'});
       

}}


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'} } className='rounded-lg'>
        <div style={{height: '530px', width: '700px', border: '2px solid #ccc', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
          <div style={{float: 'left', width: '50%', padding: '20px',height:'72vh'}} className=" bg-gradient-to-b from-blue-dark to-blue-light">
          <img
    src={img1}
    alt="Image"
    className="w-full h-auto object-cover mt-24"
    style={{
      maskImage: 'linear-gradient(to bottom right, transparent 0%, black 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom right, transparent 0%, black 100%)',
      maskMode: 'luminance',
    }}
  />
          </div>
          <div style={{float: 'left', width: '50%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <br/><h2 style={{textAlign: 'center'}}>Create an Account</h2>
            <div style={{marginBottom: '10px'}}><br/>
              <label htmlFor="firstName">First Name</label>
              <input value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} type="text" id="firstName" className="form-control" style={{backgroundColor: '#d9d9d9'}} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <label htmlFor="lastName">Last Name</label>
              <input value={lastname} onChange={(e)=>{setLastname(e.target.value)}} type="text" id="lastName" className="form-control" style={{backgroundColor: '#d9d9d9'}} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" id="email" className="form-control" style={{backgroundColor: '#d9d9d9'}} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" className="form-control" style={{backgroundColor: '#d9d9d9'}} />
            </div><br/>
            <button onClick={handleClick} style={{width: '100%', padding: '10px', backgroundColor: '#4addff',  color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer'}}>Register</button>
            <div style={{textAlign: 'center', marginTop: '10px'}}><br/>
              Already have an account? <Link to={'/'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
