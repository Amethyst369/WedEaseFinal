import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { VendContext } from '../../../Store/VendContext';
import './Vsignin.css';
const Vsignin = () => {

  const [ email, setEmail]= useState('');
  const [ password ,setPassword]= useState('');
 
const {setVend} = useContext(VendContext)
  const Navigate=useNavigate()
  const auth = getAuth();




  const handleLogin=(e)=>{
    e.preventDefault()
   //firebase.auth().signInWithEmailAndPassword(email,password) //- this is code of namespaced API but we use modular API
   signInWithEmailAndPassword(auth,email,password)
   .then(()=>{
     setVend(email)
    Navigate('/services');
   }).catch((error)=>{
    alert(error.message)
   })
  }
  return (
    <div>


            <div className="pagest">

                <div className="imagest">

                    {/* <div className="leftsidest"> </div> */}
                    <div className="rightsiderst">
                        <h2 className="textst">LOGIN YOUR WEDEASE ACCOUNT</h2>
                        <h4 className="lowtextst">"Unlock the door to WEDEASE"</h4><br />

                        <div className="input_containerst">
                            <label htmlFor="emailTextbox"></label>
                            <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text" id="emailTextbox" placeholder="Enter email Address" className="textboxst" />

                            <label htmlFor="passwordTextbox"></label>
                            <input
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            
                            type="password" id="passwordTextbox" placeholder="Enter Password" className="passwordst" />

                            <button className="submitst"   onClick={handleLogin}> LOGIN</button>
                            <a href="Forgot password.html" className="forgotpasst">Forgot Password?</a>

                            <p className="donthaveawedeaseaccountst">Don't have a WEDEASE account? <a  className="signupst" onClick={()=>Navigate('/vsignup')} >Signup</a></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Vsignin
