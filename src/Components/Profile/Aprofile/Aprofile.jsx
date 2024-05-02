import { collection, getDocs, getFirestore, query, where, } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Firebasecontext } from '../../../Store/Firebasecontext';
import './Aprofile.css';
const Aprofile = () => {
    const[admin ,setAdmin]=useState([])
    const[users ,setUsers]=useState([])
    const[vendor ,setVendor]=useState([])
    const {firebase} = useContext(Firebasecontext)
    const Navigate = useNavigate();

    var ad = JSON.parse(localStorage.getItem('admin'));
    
    useEffect(async()=>{
  
        const db= getFirestore(firebase);
        const q = query(collection(db,'Admin'),where('id', '==',ad.id) ) 
        const get = await getDocs(q);
        const list = get.forEach(doc=>{
          setAdmin(doc.data()) 
          
          
          
          
      
        } )
        return list
        

     


        
      },[])
      console.log(admin)


      ///.........Getting use datas ...........

      useEffect(async () => {
        const db = getFirestore(firebase);
        const data = await getDocs(collection(db, 'user'));
        const filteredProducts = data.docs
          .map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
           // Filter products by categoryname
           
        setUsers(filteredProducts);
      }, []);
     console.log(users)
///......................................
//.......getting vendor data....

useEffect(async () => {
    const db = getFirestore(firebase);
    const dat = await getDocs(collection(db, 'vendors'));
    const filteredProduct = dat.docs
      .map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
       // Filter products by categoryname
       
    setVendor(filteredProduct);
  }, []);
 console.log(vendor)


//..............................

    


  return (
    <div >

    <div className="containerap">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* <div className="pt-20 rounded-top" style={{ background: 'url(https://bootdey.com/image/480x480/FF00FF/000000) no-repeat', backgroundSize: 'cover' }}></div> */}
              <div className="card rounded-bottom smooth-shadow-sm">
                <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="avatar-xxl rounded-circle border border-2" alt="Image" />
                      <a  className="position-absolute top-0 right-0 me-2">
                        <img src="https://dashui.codescandy.com/dashuipro/assets/images/svg/checked-mark.svg" alt="Image" className="icon-sm" />
                      </a>
                    </div>
                    <div className="lh-1">
                      <h2 className="mb-0">{admin.adminname} </h2>
                      <p className="mb-0 d-block">{admin.email}</p><br />
                      <p className="mb-0 d-block">{admin.phone}</p>
                    </div>
                  </div>
                  <div>
                    <a  className="btn btn-outline-primary d-none d-md-block" onClick={()=> Navigate('/edita')}  >Edit Profile</a>
                  </div>
                </div>
                <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" >Activity</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                



                <div className="mb-8">
                  <div className="card bg-gray-300 shadow-none mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-0">USER LIST</h5>
                        </div>
                        <div>
                          <a  className="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 icon-xs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <ul className="list-group list-group-flush">


                    {users.map(user =>(

                     
<li className="list-group-item p-3"   >
<div className="d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
    <div>
      <img src={ user.profileurl ? user.profileurl : "https://bootdey.com/img/Content/avatar/avatar1.png"} alt="Image" className="avatar-sm rounded-circle" />
    </div>
    <div className="ms-3">
      <p className="mb-0 font-weight-medium">{user.username}</p>
    </div>
  </div>
  <div>
    <div className="dropdown dropstart">
      <a  className="btn btn-ghost btn-icon btn-sm rounded-circle" id="dropdownactivityOne" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical icon-xs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownactivityOne">
        <a className="dropdown-item d-flex align-items-center" >delete</a>
      </div>
    </div>
  </div>
</div>
</li>   


                          ))}


                      






                      
                    </ul>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="card bg-gray-300 shadow-none mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-0">VENDORS LIST</h5>
                        </div>
                        <div>
                          <a href="#!" className="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 icon-xs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <ul className="list-group list-group-flush">

                     {vendor.map(vend =>(
                    
                    
                    <li className="list-group-item p-3"   >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <img src={vend.profileurl ? vend.profileurl : "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Image" className="avatar-sm rounded-circle" />
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 font-weight-medium">{vend.username}</p>
                        </div>
                      </div>
                      <div>
                        <div className="dropdown dropstart">
                          <a  className="btn btn-ghost btn-icon btn-sm rounded-circle" id="dropdownactivitySeven" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical icon-xs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownactivitySeven">
                            <a className="dropdown-item d-flex align-items-center" href="#!">DELETE</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>


                     ))}



                     




                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
            
    
    
    
       </div>
  )
}

export default Aprofile
