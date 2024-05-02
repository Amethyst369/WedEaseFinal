import { collection, getDocs, getFirestore } from 'firebase/firestore';

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import { PostContext } from '../../../Store/PostContext';

import './Banner.css';
const Banner = () => {
  const Navigate = useNavigate();
  const {firebase} = useContext(Firebasecontext);
  const [products,setProducts] = useState([]);
  const { postDetails, setPostDetails } = useContext(PostContext);
  const [ ptrue ,setPtrue ] = useState(false);

  var value = postDetails;

  if (value){
 localStorage.setItem("product",JSON.stringify(value));
 }
 
   



  console.log(products);


 var title = JSON.parse(localStorage.getItem('title'));
 {console.log(title)}
 
 var prod  = JSON.parse(localStorage.getItem('sproduct'));
 
 


 useEffect(async () => {
  const db = getFirestore(firebase);
  const data = await getDocs(collection(db, 'products'));
  const filteredProducts = data.docs
    .map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    .filter(product => product.categoryname === title); // Filter products by categoryname
     
  setProducts(filteredProducts);
}, []);

















  return (
    <div>
      <h2 className='titleb '>{title}</h2>
      <div className='mainb' >

        <div className='galleryb'>
          {/* card starts */}
          <div className='galb'>

            {/* ............................................... */}
          
        
             {/* Map filtered products */}
          {products.map(product => (
            <div className='exxx' key={product.id}
            onClick={()=>{
              setPostDetails(product)
              setPtrue(true)
              if(ptrue){
                Navigate('/post')
              }
               
            
            }}
            
            
            >
              <div className='profxx'>
              
                <p>{product.name}</p>
              </div>
              <div className='detailx'>
                <h5>{product.categoryname}</h5>
                <h6>Price: {product.price}</h6>
                <h6>posted on : <br />
                         {product.createdAt}</h6>
                      <h6>Location : <br />
                        {product.location}</h6>
                {/* <ul>
                  <li><i className='fa fa-star checked'></i></li>
                  <li><i className='fa fa-star checked'></i></li>
                  <li><i className='fa fa-star checked'></i></li>
                  <li><i className='fa fa-star'></i></li>
                  <li><i className='fa fa-star'></i></li>
                </ul> */}
              </div>
              <div className='det'></div>
              <img src={product.imageurl} alt="dd" className='mg' />
            </div>
          ))}
          {/* End of map */}

           


            


            


            

          </div>
          







        </div>
      </div>
    </div>
  )
}

export default Banner
