import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, Firebasecontext } from '../../../Store/Firebasecontext';

import './Cprofile.css';


const Cprofile = () => {
  
  const Navigate  = useNavigate();
  const {user}=useContext(AuthContext);

  
  const [userDetails ,setUserDetails] = useState([]);
  const {firebase} = useContext(Firebasecontext)
   const value = user
   
 

    if (value){
     localStorage.setItem("Name",JSON.stringify(value));
     }
      var txt = JSON.parse(localStorage.getItem('Name'));
      {console.log(txt.uid)}

    useEffect(async()=>{

     const db= getFirestore(firebase);
     const q = query(collection(db,'user'),where('id', '==',txt.uid) ) 
     const get = await getDocs(q);
     const list = get.forEach(doc=>{
       setUserDetails(doc.data()) 
       
       
       
       
   
     } )
     return list
     
   },[])
  console.log(userDetails)
 

  
 
  

 


  return (

    <div className="profilecd">
      <div className="profile-headercd">
        <h2> Profile</h2>
      </div>
      <div className="profile-bodycd">
        <div className="profile-picturecd">
           <img src={userDetails.profileurl ? `${userDetails.profileurl}`:"src/Components/Post/Images/cat.jpeg"} alt="Profile" /> 
        </div>
        <div className="profile-detailscd">
          <h3>{user ? ` ${user.displayName}`:'name'}</h3>
            <p><p className='paracd'>Email:</p> {user ? ` ${user.email}`:'email'}</p>
         <p> <p className='paracd'>Phone:</p> {userDetails.phone}</p>
           <p><p className='paracd'>Address:</p>{userDetails.adress}</p>
          
          <p> {userDetails.description}</p>
          <button className="edit-profile-btncd" onClick={ ()=> Navigate('/editc')}>Edit Profile</button>
        </div>
      </div>
      <div className="profile-orderscd">
        <h3>Recent Bookings</h3>
        <ul>
          <li>Order #1234 - Total: $100 - Status: Delivered</li>
          <li>Order #5678 - Total: $75 - Status: In Progress</li>
        </ul>
      </div>
      
      
      <div className="profile-settingscd">
        <h3>Account Settings</h3>
      
        <button className="delete-account-btncd">Delete Account</button>
      </div>
     
      
     
     
      
    </div>
  )
}

export default Cprofile;
