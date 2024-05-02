import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Config';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import './Customer.css';

const Customer = () => {
  const Navigate = useNavigate();
  const [username,setUsername]= useState('');
  const [ email, setEmail]=useState('');
  const {Firebase}= useContext(Firebasecontext)
 // const [ phone, setPhone]=useState('');
  const [ password, setPassword]=useState('');
  const auth = getAuth();
  const handlesubmit =(e)=> {
    e.preventDefault()
    
    //Firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=>{
      //alert(error.message)
  // }) //- this is code of namespaced API but we use modular API
  createUserWithEmailAndPassword(auth,email,password)
   
  .then((result)=>{
    
    updateProfile(result.user, {
     displayName: username
   },console.log(' profile is updated with  user name -'+ username)
   ).then(async()=>{
      
    const prodAdd =  await addDoc(collection(db,'user'),{ 
      id :result.user.uid,
     username:username,
     email:email
     //phone:phone

    })
    console.log('Data stored to firestore with id: '+prodAdd.id)
    return prodAdd
   })
   
   }).then(()=>{
    Navigate("/csignin");
   })
    
      
    
    

  }
  
  return (
    <div className="signup-box">
      
      <form onSubmit={handlesubmit} className='formcl'>
      <h1>Sign Up Your Account</h1>



        <label> Name</label>
        <input  className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John" />
        
        <label>Email</label>
        <input 
        className="input"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id="fname"
        name="email"
        defaultValue="John"
         />
        <label>Password</label>
        <input 
         className="input"
         type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         id="lname"
         name="password"
         defaultValue="Doe"
         />
        
        <button>signup</button>

        <p>
        By clicking the Sign Up button, you agree to our <br />
        Terms and Condition and Policy Privacy</p>
                                
      </form>
     
      
      
      <p className="para-2">
        Already have an account? <a onClick={()=>Navigate('/csignin')} >Login here</a>
      </p>
    </div>
  )
}

export default Customer
