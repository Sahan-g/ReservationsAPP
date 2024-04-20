import { useState } from 'react';
import img1 from '../components/images/logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const Login = () => {

  const [email,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const{enqueueSnackbar}=useSnackbar();

  const handleClick= async ()=>{
    const user={
      email,password

    }
    const {data}= await axios.post('http://localhost:3360/login',user,
    { withCredentials: true })

      const{message,success}=data;
      console.log(data)
      if(success){
        navigate('/main');
        
      }
      if(message=='All fields are required'){
        enqueueSnackbar(message,{variant:'warning'})
      }else if(message=='Incorrect password or email'){
        enqueueSnackbar(message,{variant:'info'})
      }else{
        enqueueSnackbar(message,{variant:'success'})
      }
      
      
    

  }



    return (
      <>
      <div className='bg-gray-200'>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'} } className='rounded-lg'>
        <div style={{height: '475px', width: '700px', border: '2px solid #ccc', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
          <div style={{float: 'left', width: '50%', padding: '20px',height:'65vh'}} className=" bg-gradient-to-b from-blue-dark to-blue-light">
            <div className="w-1/2 mx-auto">
  <img
    src={img1}
    alt="Image"
    className="w-full h-auto object-cover"
    style={{
      maskImage: 'linear-gradient(to bottom right, transparent 0%, black 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom right, transparent 0%, black 100%)',
      maskMode: 'luminance',
    }}
    />
</div>

          </div>
          <div style={{float: 'left', width: '50%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <br/><h2 style={{textAlign: 'center'}}>Login</h2>
            <div style={{marginBottom: '10px'}}><br/>
              <label htmlFor="username">Username</label>
              <input value={email} onChange={(e)=>{setUsername(e.target.value)}}
              type="text" id="username" className="form-control" style={{backgroundColor: '#d9d9d9'}} />
  
            </div>
            <div style={{marginBottom: '10px'}}>
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
               type="password" id="password" className="form-control"style={{backgroundColor: '#d9d9d9'}} />
            </div>
            <div style={{textAlign: 'right', marginBottom: '10px'}}>
              <a href="#">Forgot Password?</a>
            </div><br/>
            <button
  onClick={handleClick}
  className="w-full p-2 bg-blue-400 text-white rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-500 active:bg-blue-600 focus:outline-none"
>
  Login
</button>


            <div style={{textAlign: 'center'}}><br/>
              Don't have an account? <Link to='/register'>Register</Link>
            </div>
          </div>
        </div>
      </div>
              </div>
               </>
    );
  };
  
  export default Login;