import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../Config/Config';
import { AuthContext, Firebasecontext } from '../../../Store/Firebasecontext';


const EditProfile = () => {
   
    const [name, setName] = useState('');
   
    const [phone, setPhone] = useState('');
    
    const [image, setImage] = useState('');
    
    
  const imageRef = ref(storage,`/image/${image.name}`);
    const {user} = useContext(AuthContext)
    const {firebase}=useContext(Firebasecontext); 
   const Navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  var ad = JSON.parse(localStorage.getItem('admin'));
  
  const fetchUsers = async () => {
    const db = getFirestore(firebase);
    const usersCollection = collection(db, 'Admin');
    const q = query(usersCollection, where('id', '==',ad.id));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        // console.log('Document ID:', doc.id);
        // console.log('Document data:', doc.data());

        // You can access the document ID using doc.id
        const userId = doc.id;
        console.log(userId)
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
                adminname : name,
                
                phone : phone,
               
                profileurl: url,
                // email : user.email,
                // id : user.uid
            }
            const updatedata = await updateDoc(doc(   db, 'Admin' ,userId) ,newdata);
            
               console.log('filestored')
               return updatedata
      
            })
             .then(()=>{
            Navigate("/aprofile");
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
        
      </div>
      <button type="submit" onClick={handleSubmit} className="submit-btnep">Save Changes</button>
    </div>
  </div>
  </Fragment>
  )
}

export default EditProfile
