import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Config';
import { VendorContext } from '../../../Store/Firebasecontext';

import './Vendor.css';
const Vendor = () => {

    const Navigate = useNavigate();
    const [username,setUsername]= useState('');
    const [cname,setCname]= useState('');
    const [ email, setEmail]=useState('');
   
    const { addVendor } = useContext(VendorContext);
    
    const [ phone, setPhone]=useState('');
    const [ password, setPassword]=useState('');
    const auth = getAuth();
   
    
    const handlesubmit =(e)=> {
        
      e.preventDefault()
      
      //Firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=>{
        //alert(error.message)
    // }) //- this is code of namespaced API but we use modular API
    createUserWithEmailAndPassword(auth,email,password)
     
    .then((result)=>{
        
      updateProfile(result.user, {
       displayName: username


     },console.log(' profile is updated with  vendor name -'+ username)
     ).then(async()=>{
        // setVend(
        //   {
        //     id: result.user.uid,
        //     username: username,
        //     companyname: cname,
        //     email: email,
        //     phone: phone
        //   }
        // )
        const vendorData = {
            id: result.user.uid,
            username: username,
            companyname: cname,
            email: email,
            phone: phone
        };

        // Add vendor data to context
        addVendor(vendorData);
        console.log('vendor data is '+ vendorData.companyname )

      const prodAdd =  await addDoc(collection(db,'vendors'),{ 
        id :result.user.uid,
       username:username,
       companyname:cname,
       email:email,
       phone:phone
  
      })
      console.log('Data stored to firestore with id: '+prodAdd.id)
      return prodAdd
     })
     
     })
     
    .then(()=>{
       Navigate("/vsignin");
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

                      
                          <input 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                          type="text" id="Name" placeholder="Enter your Name" className="textboxst" />
                          
                          <input
                            value={cname}
                            onChange={(e)=>setCname(e.target.value)}
                          
                          type="text" id="cname" placeholder="Enter your Company Name" className="textboxst" />
                        
                          <input 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                          type="number" id="phn" placeholder="Enter phone number" className="textboxst" />
                          
                          <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          type="text" id="emailTextbox" placeholder="Enter email Address" className="textboxst" />
                        
                          <input
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          type="password" id="passwordTextbox" placeholder="Enter Password" className="passwordst" />

                         
                          <button className="submitst" type='submit' onClick={handlesubmit} >SignUp</button>
                        


        

                         
                      </div>
                     
                  </div>
              </div>
          </div>
  </div>
  )
}

export default Vendor
