import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import './Usignin.css';


const Usignin = () => {
  const [ email, setEmail]= useState('');
  const [ password ,setPassword]= useState('');
  const {firebase}= useContext(Firebasecontext);
  const Navigate=useNavigate()
  const auth = getAuth();
  const handleLogin=(e)=>{
    e.preventDefault()
   //firebase.auth().signInWithEmailAndPassword(email,password) //- this is code of namespaced API but we use modular API
   signInWithEmailAndPassword(auth,email,password)
   .then(()=>{
  
    Navigate('/services');
   }).catch((error)=>{
    alert(error.message)
   })
  }
  return (
    <div>
      
     
       <div className="page">
      <div className="images">
        <div className="leftside"></div>
        <div className="rightside">
          <h2 className="text">LOGIN YOUR WEDEASE ACCOUNT</h2>
          <h4 className="lowtext">"Grow Your Business with WEDEASE"</h4>
          <br />
          <form className='formb' onSubmit={handleLogin}>
            
         
            <label htmlFor="emailTextbox"></label>
            <input
              type="text"
              id="emailTextbox"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter email Address"
              className="textbox"
            />
          

            <label htmlFor="passwordTextBox"></label>
            <input
              type="password"
              id="passwordTextBox"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter Password"
              className="password"
            />
           

            <button className="submit"> LOGIN</button>
            
            
           
         

            </form>

            
           
            <p className="donthaveawedeaseaccount">
              Don't have a WEDEASE account ?<span className="signup"onClick={()=>Navigate('/csignup')} > Signup</span>
            </p>
            
            <p className="donthaveawedeaseaccount">
              Not a Customer ?<span className="signup" onClick={()=>Navigate('/vsignin')} > Business Login</span>
            </p>
        </div>
      </div>
    </div>
   

  </div>
      
     
  
  )
}

export default Usignin
