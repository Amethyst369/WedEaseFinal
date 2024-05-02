import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { db } from '../../Config/Config'; //when this used permission denied
import { storage } from '../../Config/Config';
import { AuthContext, Firebasecontext } from '../../Store/Firebasecontext';
import { PostContext } from '../../Store/PostContext';
import './CreatePost.css';


const CreatePost = () => {
  const[name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const[ disc,setDisc] = useState('')
  const[ loc,setLoc] = useState('')
  const {firebase}= useContext(Firebasecontext);
  const{postDetails,setPostDetails}=useContext(PostContext)
  const {user} = useContext(AuthContext);
 const[url,setUrl]=useState('')
 // const imageRef = ref(storage,`/image/${image.name}`); //image .nam ? note it
  const date = new Date();
  const Navigate = useNavigate();

  // const handleSubmit=()=>{
  //   uploadBytes(imageRef , File).then((snapshot)=>{
  //     console.log('file uploaded')
  //   }).then(
  //     getDownloadURL(imageRef).then(async(url)=>{
  //       console.log( 'this is image url => '+ url)
  //       const db = getFirestore(firebase);
  //       const add = await addDoc(collection(db,'products'),{
  //         name : name,
  //         categoryname : category,
  //        price: price,
  //        discription : disc,
  //        location: loc,
  //         imageurl: url,
  //         userId: user.uid,
  //         createdAt : date.toDateString()
          
  //       })
  //       setPostDetails(
      
  //         add.id )
  //      console.log(postDetails)

      
  //       console.log('product data is stored to firestore with id: '+add.id)
  //       return add

        
        

  //     })
  //    .then(()=>{
  //       Navigate("/services");
  //      })
        
  //   )
    

    
  // }

  const handleSubmit = async () => {
    try {
      // Upload the image to Firebase Storage
      const storageRef = ref(storage,` /images/${image.name}`);
      //const snapshot = await uploadBytes(imageRef, File);// file / make this change 
      await uploadBytes(storageRef, image);
      console.log('File uploaded');
      
      // Once uploaded, get the download URL of the image
      //const url = await getDownloadURL(imageRef);

      const downloadUrl = await getDownloadURL(storageRef);
      console.log('Image URL:', downloadUrl);
      const downloadUrlString = downloadUrl.toString();

      
      // Add the product details to Firestore
      const db = getFirestore(firebase);
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        categoryname: category,
        price: price,
        description: disc,
        location: loc,
        imageurl: downloadUrlString,
        userId: user.uid,
        createdAt: date.toDateString()
      });
  
      // Log the ID of the document where product details are stored
      console.log('Product data stored in Firestore with ID:', docRef.id);
      
      // Set the post details and navigate to the services page
      setPostDetails(docRef.id);
      console.log('Post details:', postDetails);
      Navigate("/services");
    } catch (error) {
      // Handle any errors that occur during the upload or Firestore operation
      console.error('Error:', error);
    }
  };
  


  

  return (
    <Fragment>
     
    <div>
       <section className="venue-order">
        <div className="container">
          <h2>CREATE YOUR SERVICE</h2>
          <div className="venue-image">
            <img src="images/ceremonial-chairs-curtain-flowers.jpg" alt="Sample Venue Image" />
          </div>
          <div className='formx'>
            <label htmlFor="servicesProvided">Company Name :</label>
            <input 
              value={name}
              onChange={(e)=>setName(e.target.value)}

            type="text" id="servicesProvided" name="servicesProvided" required /><br />

            <label htmlFor="serviceImage">Service Image Upload:</label>
            <input type="file"
            onChange={
              (e)=>{
                setImage(e.target.files[0]);  {/**Diffrence in here is there is bracket for setImage but in the html dont have that */}
              }
            }
             id="serviceImage" name="serviceImage" accept="image/*" className="image-upload" /><br />

            <label htmlFor="serviceCategory">Service Category:</label>
            <select id="serviceCategory" name="serviceCategory"
             value={category}
             onChange={(e)=>setCategory(e.target.value)}
            required>
              <option value="photography">Photography</option>
              <option value="catering">Catering</option>
              <option value="planning & Decor">Planning & Decor</option>
              <option value="venue">Venue</option>
              <option value="makeup">Makeup</option>
              <option value="mehandi">Mehandi</option>
              <option value="invites and gifts">Invites and Gifts</option>
              <option value="program">Program</option>
              <option value="rental service">Rental Service</option>
              <option value="jewellery & accesoeries">Jewellery & Accessories</option>
              {/* Add more options as needed */}
            </select><br />

            <label htmlFor="price">Price of Service:</label>
            <input
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            type="number" id="price" name="price" required /><br />

            <label htmlFor="serviceDescription">Description of Services:</label>
            <textarea id="serviceDescription" 
              value={disc}
              onChange={(e)=>setDisc(e.target.value)}
            name="serviceDescription" rows="5" required></textarea><br />
            <label htmlFor="serviceDescription">Location of Services:</label>
             <textarea id="serviceDescription" 
              value={loc}
              onChange={(e)=>setLoc(e.target.value)}
            name="serviceDescription" rows="5" required></textarea><br />

            <div className="agree-statement">
              <label htmlFor="agree">I agree to all the terms and conditions</label>
            </div>
            <input type="checkbox" id="agree" name="agree" className="box" required />

            <button onClick={handleSubmit}  className="animated-button">Create Service post</button>
            </div>
        </div>
      </section>
    </div>
    </Fragment>
  )
}

export default CreatePost
