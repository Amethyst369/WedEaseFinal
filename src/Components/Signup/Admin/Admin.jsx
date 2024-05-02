
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Config';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import './Admin.css';



const Admin = () => {

    const Navigate = useNavigate();
    const [username,setUsername]= useState('');
    const [ email, setEmail]=useState('');
    const {Firebase}= useContext(Firebasecontext)
   // const [ phone, setPhone]=useState('');
    const [ password, setPassword]=useState('');
    const auth = getAuth();
    const handlesubmit =(e)=> {
      e.preventDefault()
      
      
    createUserWithEmailAndPassword(auth,email,password)
     
    .then((result)=>{
      
      updateProfile(result.user, {
       displayName: username
     },console.log(' profile is updated with  user name -'+ username)
     ).then(async()=>{
        
      const prodAdd =  await addDoc(collection(db,'Admin'),{ 
        id :result.user.uid,
       adminname:username,
       email:email
       //phone:phone
  
      })
      console.log('Data stored to firestore with id: '+prodAdd.id)
      return prodAdd
     })
     
     }).then(()=>{
      Navigate("/asignin");
     })
      
        
      
      
  
    }
    









  return (
    
    <div className="main_dival">

    
        <div className="container_for_AdminLoginal">
            <div className="my_Formal">
                <form  onSubmit={handlesubmit}>
                    <h2>
                        ADMIN SIGNUP
                    </h2>

                    <input type="text"
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                    placeholder='USERNAME' />

                    <input type="text"
                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='EMAIL ID' />


                    <input 
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    
                    type="password" placeholder='PASSWORD' />
                    <button type='submit'>SIGN UP</button>
                </form>

            </div>
            <div className="image_in_Admin_loginal">
                <img src="
                images/photo_2024-03-15_20-41-36.jpg" alt="" />

            </div>
        </div>
    



</div> 
  )
}

export default Admin
