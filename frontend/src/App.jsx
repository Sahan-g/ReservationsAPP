
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import DeleteReservation from './pages/DeleteReservation';
import Show from './pages/Show';
import Success from './pages/About';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import TandC from './pages/TandC';


const App = () => {
  return (
   <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/main' element={<Main/>}></Route>
     <Route  path='/reservations' element={<Home/>}/>
     <Route  path='/reservations/create' element={<Create/>}></Route>
     <Route path='/reservations/create/success' element={<Success/>}></Route>
     <Route  path='/reservations/view/:id' element={<Show/>}></Route>
     <Route  path='/reservations/edit/:id' element={<Edit/>}></Route>
     <Route  path='/delete/:id' element={<DeleteReservation/>}></Route>
     <Route path='/register' element={<Register/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/TnC' element={<TandC/>}/>
      
     </Routes>
     
   
    )
}

export default App