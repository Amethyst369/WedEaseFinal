import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, Firebasecontext } from '../../../Store/Firebasecontext';
import { PostContext } from '../../../Store/PostContext';
import './Vprofile.css';
const Vprofile = () => {
     const{user}=useContext(AuthContext)
     const [userDetails ,setUserDetails] = useState([]);
     const [productDetails ,setProductDetails] = useState([]);
     const {firebase} = useContext(Firebasecontext)
     const Navigate = useNavigate();
     const { postDetails, setPostDetails } = useContext(PostContext);
  const [ ptrue ,setPtrue ] = useState(false);
  var val = postDetails;

  if (val){
 localStorage.setItem("product",JSON.stringify(val));
 }
 








      const value = user
      
    

       if (value){
        localStorage.setItem("Name",JSON.stringify(value));
        }
         var txt = JSON.parse(localStorage.getItem('Name'));
         {console.log(txt)}
   
       useEffect(async()=>{
  
        const db= getFirestore(firebase);
        const q = query(collection(db,'vendors'),where('id', '==',txt.uid) ) 
        const get = await getDocs(q);
        const list = get.forEach(doc=>{
          setUserDetails(doc.data()) 
          
          
          
          
      
        } )
        return list
        

     


        
      },[])
     


      useEffect(async () => {
        const db = getFirestore(firebase);
        const data = await getDocs(collection(db, 'products'));
        const filteredProducts = data.docs
          .map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
          .filter(product => product.userId === txt.uid); // Filter products by categoryname
           
        setProductDetails(filteredProducts);
      }, []);
      

      console.log(userDetails.profileurl)
      console.log(productDetails)




    
  return (
    
    <div className="vendor-profilevz">
    <div className="profile-headervz">
        <div className="profile-image-containervz">
            <img className="profile-imagevz" src={userDetails.profileurl ? `${userDetails.profileurl}`:"src/Components/Post/Images/cat.jpeg"} alt="Profile" />
        </div>
        <div className="profile-infovz">
            <h1>{userDetails.username}</h1>
            <p>{userDetails.companyname}</p>
        </div>
    </div>
    <div className="service-images-containervz">
        <div className="service-imagesvz">
            {productDetails.map(im =>(

              <img className="service-imagevz" src={im.imageurl ? `${im.imageurl}`:"https://via.placeholder.com/400x200"}  alt="Service 1" />

            ))}

           
           
            
        </div>
    </div>
    <div className="profile-settingsvz">
        <h3>Account Settings</h3>
        <button className="change-password-btnvz" onClick={()=>Navigate('/editv')}>Edit Profile</button>
       
    </div>
    <div className="profile-detailsvz">

        <h2>About Us</h2>
        <p>{userDetails.description}</p>
        <h2>Contact Information</h2>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <h2>Services Offered</h2>
        <ul>
            <li>{productDetails.categoryname}</li>

        </ul>
        <h2>Location</h2>
        <p>{productDetails.location}</p>
    </div>
    <div className="postsvz">
        <h2>Recent Posts</h2>
         
        {productDetails.map(product => (
            
            
            
            
            
                <div className="postvz" 
                onClick={()=>{
                    setPostDetails(product)
                    setPtrue(true)
                    if(ptrue){
                      Navigate('/post')
                    }
                     
                  
                  }}
                
                
                >
            <img className="post-imagevz" src={product.imageurl}  alt="Post 1" />
            <p className="post-descriptionvz"> <h3>{product.categoryname}</h3> 
                       created at : {product.createdAt} <br />
                       price : {product.price} <br />
                       
            
            </p>
        </div>
              
           
          ))}    






        
      
    </div>
</div>

  )
}

export default Vprofile
