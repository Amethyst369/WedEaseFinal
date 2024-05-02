import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import './Asignin.css';

const Asignin = () => {

    const [ email, setEmail]= useState('');
  const [ password ,setPassword]= useState('');
  const {firebase}= useContext(Firebasecontext);
  const Navigate=useNavigate()
  const auth = getAuth();
  const handleLogin=(e)=>{
    e.preventDefault()
   //firebase.auth().signInWithEmailAndPassword(email,password) //- this is code of namespaced API but we use modular API
   signInWithEmailAndPassword(auth,email,password)
   .then(()=>{
  
    Navigate('/services');
   }).catch((error)=>{
    alert(error.message)
   })
  }





  return (
    <div className="main_dival">

        
            <div className="container_for_AdminLoginal">
                <div className="my_Formal">
                    <form onSubmit={handleLogin}>
                        <h2>
                            ADMIN LOGIN
                        </h2>

                        <input type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        
                        placeholder='Enter email' />
                        <input type="password" placeholder='PASSWORD'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        
                        />
                        <button type='submit'>LOGIN</button>
                    </form>

                </div>
                <div className="image_in_Admin_login">
                    <img src="
                    images/photo_2024-03-15_20-41-36.jpg" alt="" />

                </div>
            </div>
        



   </div>
  )
}

export default Asignin
