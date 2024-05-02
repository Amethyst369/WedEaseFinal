import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, Firebasecontext } from '../../../Store/Firebasecontext';
//import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../../Store/PostContext';
import './NavBar.css';
const NavBar = () => {



  const {user}=useContext(AuthContext) //this for display user name in header
  
  const auth=getAuth();
  const Navigate=useNavigate();
  const {postDetails} = useContext(PostContext)
  console.log(postDetails)

  const [userDetails ,setUserDetails] = useState([]);
  const [adminDetails ,setAdminDetails] = useState([]);
  
  const {firebase} = useContext(Firebasecontext)
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
  console.log(userDetails)

  useEffect(async()=>{

    const db= getFirestore(firebase);
    const qq = query(collection(db,'Admin'),where('id', '==',txt.uid) ) 
    const getq = await getDocs(qq);
    const listq = getq.forEach(doc=>{
      setAdminDetails(doc.data()) 
      
      
      
      
  
    } )
    return listq
    
  },[])
  

   var admin = adminDetails;
   if (admin){
    localStorage.setItem("admin",JSON.stringify(admin));
    }
    var ad = JSON.parse(localStorage.getItem('admin'));
    {console.log(ad)}















const Prof = ()=> {
  user ?
          Navigate('/service')  : Navigate('/csignin')

  
}
const pro =()=>{ if(userDetails.companyname) {
  Navigate('/vprofile')
} 
else if(ad.adminname){
  Navigate('/aprofile')
}


else if(user){
  Navigate('/profile')
}
else{
  console.log("avde nikkiya")
}
}
  //.............drop down text .....................
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  //................................








  return (
    <div >
     {/* <header>
        <input type='checkbox' name='' id='chk1' />
        <div className='logo'><h1>WEdDEASE</h1></div>
        <div className='search-box'>
          <form>
            <input type='text' name='search' id='srch' placeholder='search..'/>
            <button type='submit'><i className='fa fa-search'></i></button>
          </form>
        </div>
        <ul>
          <i><p>Home</p></i>
          <i><p>settings</p></i>
          <i><p>help</p></i>
          <i><p>profile</p></i>
        </ul>
        <div className='menu'>
          <label  >
             <i className='fa fa-bars'></i>
          </label>

        </div>
     </header> */}


     

        <nav className="navbarnn"> 
      <div className="logon">Logo</div>
     
       
      <input type="text" className="search-barn" placeholder="Search..." />
      <div className="nav-buttonsn">
      
        <button className="nav-buttonn" onClick={()=>Navigate('/services' )}>Home</button>
        
        <button className="nav-buttonn" onClick={Prof}>{user ? `Welcome  `: 'Login'}</button>
          
        


            {/* ....................Settings section........................... */}

  

   <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <div className="dropdown-content">

        <div className="dropdown-item"><button className="nav-buttonnd" onClick={pro}>Profile</button></div>
          


         <div className="dropdown-item">{userDetails.companyname && <button className="nav-buttonnd" onClick={()=>{
           Navigate('/create')
          


          } } 
          >Create Post</button>}</div>
          <div className="dropdown-item">
          {userDetails.companyname && <button className="nav-buttonnd" onClick={()=>{
           Navigate('/orders')
          
          } } 
          >Orders </button>}
          </div>
          <div className="dropdown-item">

          {user && <button className="nav-buttonnd" onClick={()=>{
           signOut(auth)
          


          } } 
          >Signout</button>}
          </div>
          

          <div className="dropdown-item"><button className="nav-buttonnd" onClick={()=> Navigate ('/asignin')} >Admin</button></div>
        </div>
      )}
    </div>

{/* ...................................................................... */}
        












           

        

          


      </div>
    </nav>

  
    </div>
      
    
  )
}

export default NavBar
