import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Fragment, useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { storage } from '../../../../Config/Config';
import { AuthContext, Firebasecontext } from '../../../../Store/Firebasecontext';
import './EditCprofile.css';


const EditCprofile = () => {

    const [name, setName] = useState('');
   
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    
    const storageRef = ref(storage,` /images/${image.name}`);
    const {user} = useContext(AuthContext)
    const {firebase}=useContext(Firebasecontext); 
   const Navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  const fetchUsers = async () => {
    const db = getFirestore(firebase);
    const usersCollection = collection(db, 'user');
    const q = query(usersCollection, where('id', '==', user.uid));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        // console.log('Document ID:', doc.id);
        // console.log('Document data:', doc.data());

        // You can access the document ID using doc.id
        const userId = doc.id;
        setUserId(userId); // Set userId in state
        // Now you can use userId as needed
      } else {
        console.log('No matching document found.');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  fetchUsers(); // C

     
  
  
    const handleSubmit = async() => {

      const storageRef = ref(storage,` /images/${image.name}`);
      

      await uploadBytes(storageRef, image).then((snapshot)=>{
            console.log('file uploaded')
          })
          
          
          
          .then(
            await getDownloadURL(storageRef).then(async(url)=>{
              console.log( 'this is image url => '+ url)

              const db = getFirestore(firebase);
              
              const newdata = {
                name : name,
                phone : phone,
                adress: address,
                description:description,
                profileurl: url,
                // email : user.email,
                // id : user.uid
            }
            const updatedata = await /*updateDoc*/ updateDoc(doc(   db, 'user' ,userId/*user.uid */) ,newdata);
            
               console.log('filestored')
               return updatedata
      
            })
             .then(()=>{
            Navigate("/profile");
             })
              
          )
   
      // Handle form submission, e.g., send data to server

    };
   


  return (


    <Fragment>
    <div className="edit-profile-containerep">
    <h1>Edit Profile</h1>
   

    <div className="edit-profile-formep">
      <div className="form-groupep">

      <label>Add a Profile Photo:</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <label>Set Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      
      <div className="form-groupep">
        <label>Add Phone Number:</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-groupep">
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="form-groupep">
        <label>wirte a Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form-groupep">
        
      </div>
      <button type="submit" onClick={handleSubmit} className="submit-btnep">Save Changes</button>
    </div>
  </div>
  </Fragment>
  )
}

export default EditCprofile
