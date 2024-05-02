import '@fortawesome/fontawesome-free/css/all.min.css';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../Store/Firebasecontext';
import './Post.css';

const Post = () => {
  const Navigate = useNavigate();
  const [strg ,setStrg]=useState('');

  //image section
 const [mimage ,setMimage] = useState("src/Components/Post/Images/audimg1.jpg")
 const handleSubImageClick = (imageUrl) => {
  setMimage(imageUrl);
};

  //................//

  const {firebase}=useContext(Firebasecontext)
  const [vendorD ,setVendorD] = useState([]);
  var txt = JSON.parse(localStorage.getItem('product'));
  {console.log(txt)}
 

 useEffect(async ()=>{
  const db = getFirestore(firebase);
  const q = query(collection(db,'vendors'),where('id', '==',txt.userId ) ) 
  const get = await getDocs(q);
  const list = get.forEach(doc=>{
    const vendor = doc.data()
    setVendorD(vendor)
    setStrg(txt.imageurl)
 
    

  } )
  
 },[]);



console.log(txt.imageurl)






  return (

    <div className="product-cardpp">
      <div className="product-imagespp">
        <div className="main-imagepp">
          <img src=  {strg}  alt="Main product" />
        </div>
        {/* <div className="sub-imagespp">
        <img src="https://firebasestorage.googleapis.com/v0/b/wedease-fd6a2.appspot.com/o/image%2Fdownload.jfif?alt=media&token=598d4299-0417-4a37-8dd0-612512411400" alt="Sub product 1" onClick={() => handleSubImageClick("src/Components/Post/Images/aimg3.jpg")} />
        <img src="src/Components/Post/Images/aimg2.jpg" alt="Sub product 2" onClick={() => handleSubImageClick("src/Components/Post/Images/aimg2.jpg")} />
        <img src="src/Components/Post/Images/aimg3.jpg" alt="Sub product 3" onClick={() => handleSubImageClick("src/Components/Post/Images/aimg3.jpg")} />
        <img src="src/Components/Post/Images/aimg4.jpg" alt="Sub product 4" onClick={() => handleSubImageClick("src/Components/Post/Images/aimg4.jpg")} />
          
        </div> */}
      </div>
      <div className="product-detailspp">
        <h2 className="product-namepp">{txt.name}</h2>
        <p className="product-descriptionpp"> {txt.categoryname}</p>
        <p className="product-descriptionpp"> {txt.description}</p>
        <p className="product-pricepp">Price : {txt.price}</p>
        <p className="product-pricepp">Posted on : {txt.createdAt}</p>
        <p className="contactspp">
          Contact : {vendorD.phone} </p>
          <p className="contactspp" >
          Email: {vendorD.email}
        </p>
        <p className="contactspp" >
          Location : {txt.location}
        </p>
        <div className="product-ratingpp">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <div className="buttonspp">
          <button className="book-now" onClick={()=>Navigate('/booking')} >Book Now</button>
          {/* <button className="chat-now">Chat Now</button> */}
         
        </div>
      </div>
    </div>
  )
}

export default Post
