import { collection, getDocs, getFirestore, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../../../Store/Firebasecontext';
import './Orders.css';




const Orders = () => {

    const {firebase}= useContext(Firebasecontext)
     const [orders , setOrders] = useState([]);
     const [order,setOrder] = useState('');
     const Navigate = useNavigate();
       var ord = Orders ;
       var or= order;




       
       if (or){
        localStorage.setItem("orderD",JSON.stringify(or));
      }
      var orDe = JSON.parse(localStorage.getItem('orderD'));
             
              {console.log(orDe)}




      var ord = JSON.parse(localStorage.getItem('Bookigs'));
   
      if (ord){
         localStorage.setItem("Order",JSON.stringify(ord));
       }
         var ors = JSON.parse(localStorage.getItem('order'));
        
         {console.log(ors)}

       
       
      
   
        var txt = JSON.parse(localStorage.getItem('product'));
     

//............................

const [orderSet, setOrderSet] = useState(false);

  const handleClick = (ordr) => {
    setOrder(ordr);
    setOrderSet(true);
  };

  if (orderSet) {
    Navigate('/order');
  }

        //....................
        
         useEffect(async () => {
            const db = getFirestore(firebase);
            const data = await getDocs(collection(db, 'Bookings') ,where( 'vId','==',txt.userId) );
            const allPost = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            console.log(allPost);
            setOrders(allPost);
        }, []);

       


    
  return (
    <div className='ordersmain'  >
    <h1 className="h1-os">ORDERS</h1>
    <div className="orders-container-os"> 


    {   orders.map(ordr => (
         
  <div 
  key={ordr.id}
  
  onClick={() => handleClick(ordr)}
    className="order-item-os"
  >
    <div className="left-content-os">
      <div className="profile-photo-os"></div>
      <p className="user-name-os">{ordr.name}</p>
    </div>
    <p className="order-date-os">{ordr.bookedtime} <br /> {ordr.bookeddate}</p>

  </div>
))}



      

     

      
    </div>
  </div>
  )
}

export default Orders
