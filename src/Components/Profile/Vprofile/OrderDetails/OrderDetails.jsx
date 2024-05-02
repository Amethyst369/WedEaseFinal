import React from 'react';

import './OrderDetails.css';


const OrderDetails = () => {



var ord = JSON.parse(localStorage.getItem('orderD'));
{console.log(ord)}





  return (
    <div className="main_div">
    <div className="order_details">
      <h1 className='order_heading'>
      ORDER DETAILS
      </h1>
      <div className="profile">
     
  
     <div className="profile_info">
     <p><strong>Full Name:</strong> {ord.name}</p>
                  <p><strong>Email:</strong> {ord.email}</p>
                  <p><strong>Address:</strong> {ord.address}</p>
                  <p><strong>Phone Number:</strong> {ord.phone}</p>
     </div>
      </div>

      <div className="event_details">
      <h2>Event Details</h2>
              <p><strong>Date:</strong> {ord.date} </p>
              <p><strong>Time:</strong> {ord.time}</p>
              <p><strong>Type:</strong> {ord.type}</p>
      </div>
      <div className="guest_details">
      <h2>Guest Details</h2>
              <p><strong>Number of Guests:</strong>{ord.guestno}</p>
              <p><strong>Additional Notes:</strong> {ord.additionalserv}</p>
              
      </div>

      <div className="budget_info">
      <h2>Budget Information</h2>
              <p><strong>Estimated Budget:</strong> {ord.budget}</p>
      </div>
    
      </div>
    

 


 </div>
  )
}

export default OrderDetails
