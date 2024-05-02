
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './Components/CreatePost/CreatePost';
import Asignin from './Components/Signin/Asignin/Asignin';
import Admin from './Components/Signup/Admin/Admin';
import Exp from './Components/exp/exp';
import { AuthContext, Firebasecontext } from './Store/Firebasecontext';
import Post from './Store/PostContext';
import VendProvider from './Store/VendContext';
import Aprof from './pages/Aprof';
import Booking from './pages/Booking';
import CsignIn from './pages/CsignIn';
import CsignUp from './pages/CsignUp';
import EditA from './pages/EditA';
import EditC from './pages/EditC';
import EditV from './pages/EditV';
import Home from './pages/Home';
import Order from './pages/Order';
import OrderD from './pages/OrderD';
import PVprof from './pages/PVprof';
import Postp from './pages/Post';
import Profile from './pages/Profile';
import ServiceFeed from './pages/ServiceFeed';
import SpecificCategory from './pages/SpecificCategory';
import VSingUp from './pages/VSingUp';
import VeSignin from './pages/VeSignin';
import View from './pages/View';
import Vprof from './pages/Vprof';

function App() {
  const {user,setUser}=useContext(AuthContext);
  const {firebase} = useContext(Firebasecontext)
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
   

  },)

  return (
    
    <>
      <div className='body'>
        <VendProvider>
        <Post>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/csignin' element={<CsignIn></CsignIn>}></Route>
            <Route path='/vsignin' element={<VeSignin></VeSignin>}></Route>
            <Route path='/csignup' element={<CsignUp></CsignUp>}></Route>
            <Route path='/services' element={<ServiceFeed></ServiceFeed>}></Route>
            <Route path='/view' element={<View></View>}></Route>
            <Route path='/post' element={<Postp></Postp>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/vprofile' element={<Vprof></Vprof>}></Route>
            <Route path='/aprofile' element={<Aprof></Aprof>}></Route>
            <Route path='/exp' element={<Exp></Exp>}></Route>
            <Route path='/create' element={<CreatePost></CreatePost>}></Route>
            <Route path='/vsignup' element={<VSingUp></VSingUp>}></Route>
            <Route path='/editc' element={<EditC></EditC>}></Route>
            <Route path='/editv' element={<EditV></EditV>}></Route>
            <Route path='/booking' element={<Booking></Booking>}></Route>
            <Route path='/orders' element={<Order></Order>}></Route>
            <Route path='/order' element={<OrderD></OrderD>}></Route>
            <Route path='/spost' element={<SpecificCategory></SpecificCategory>}></Route>
            <Route path='/asignup' element={<Admin></Admin>}></Route>
            <Route path='/asignin' element={<Asignin></Asignin>}></Route>
            <Route path='/pvprof' element={<PVprof></PVprof>}></Route>
            <Route path='/edita' element={<EditA></EditA>}></Route>
          </Routes>
        </Router>
        </Post>
        </VendProvider>
        

      </div>
    </>
  )
}

export default App
