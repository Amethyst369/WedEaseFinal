import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, Firebasecontext } from '../../../Store/Firebasecontext';
import './Bookings.css';
const Bookings = () => {

    
     const [name,setName]=useState('');
     const [email,setEmail]=useState('');
     const [address,setAddress]=useState('');
     const [phone,setPhone]=useState('');
     const [date,setDate]=useState('');
     const [time,setTime]=useState('');
     const [type,setType]=useState('');
     const [gustno,setGuestno]=useState('');
     const [vpref,setVpref]=useState('');
     const [additionalserv,setAdditionalserv]=useState('');
     const [budget,setBudget]=useState('');
     const Navigate = useNavigate();
     const {firebase}=useContext(Firebasecontext)
     const {user}=useContext(AuthContext)
    
     const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
     


   
   

    var txt = JSON.parse(localStorage.getItem('product'));
   
    const handleSubmit=async()=>{
        
        
            const db = getFirestore(firebase);
            const add = await addDoc(collection(db,'Bookings'),{
              name : name,
              email:email,
              address : address,
              phone : phone,
              date : date ,
              time : time,
              type : type,
              guestno : gustno,
              vpref : vpref,
              additionalserv : additionalserv,
              budget : budget,
              vId : txt.userId,
              UId : txt.id,
              userId : user.uid,
              bookeddate:currentDate,
              bookedtime : currentTime
              
               

             
              
            }
        ).then(()=>

        
        Navigate('/post')
       )
            
    
          
            
            return add
          
      }
        

  return (
    <div>
       

        <section className="venue-order-bk">
          <div className="container-bk">
            <h2>Book Your Venue</h2>
            <div className="venue-image-bk">
              <img src="src/Components/Post/Images/aimg3.jpg" alt="Sample Venue Image" />
            </div>
               <div className='formbk'>
              <label htmlFor="name">Full Name:</label>
              <input 
               value={name}
              onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" required />

              <label htmlFor="email">Email Address:</label>
              <input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number:</label>
              <input 
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}type="number" id="phone" name="phone" required />

              <label htmlFor="address">Address:</label>
              <textarea 
              value={address}
              onChange={(e)=>setAddress(e.target.value)}id="address" name="address" required></textarea>

              <label htmlFor="event-date">Event Date:</label>
              <input
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              type="date" id="event-date" name="event-date" required />

              <label htmlFor="event-time">Event Time:</label>
              <input 
              value={time}
              onChange={(e)=>setTime(e.target.value)}
              type="time" id="event-time" name="event-time" required />

              <label htmlFor="event-type">Event Type:</label>
              <select 
              value={type}
              onChange={(e)=>setType(e.target.value)}
              id="event-type" name="event-type" required>
                <option value="Wedding">Wedding</option>
                <option value="Haldi">Haldi</option>
                <option value="Pre Wedding">Pre Wedding</option>
                <option value="Reception">Reception</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="guests">Number of Guests:</label>
              <input 
              value={gustno}
              onChange={(e)=>setGuestno(e.target.value)}
              type="number" id="guests" name="guests" required />

              <label htmlFor="venue-preferences">Venue Preferences:</label>
              <textarea 
              value={vpref}
              onChange={(e)=>setVpref(e.target.value)}
              id="venue-preferences" name="venue-preferences"></textarea>

              <label htmlFor="services">Additional Services:</label>
              <textarea 
              value={additionalserv}
              onChange={(e)=>setAdditionalserv(e.target.value)}
              id="services" name="services"></textarea>

              <label htmlFor="budget">Estimated Budget:</label>
              <input
              value={budget}
              onChange={(e)=>setBudget(e.target.value)}
              type="text" id="budget" name="budget" />

              <label htmlFor="terms">Terms and Conditions:</label>
              <input type="checkbox" id="terms" name="terms" required />
              <span>I agree to the terms and conditions</span>

              <input type="submit" onClick={handleSubmit} value="Submit" />
              </div>
          </div>
        </section>

        
      </div>
  )
}

export default Bookings
