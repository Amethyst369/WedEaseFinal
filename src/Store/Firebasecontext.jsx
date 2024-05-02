import { createContext, useState } from 'react';
 
export const Firebasecontext = createContext(null);
export const AuthContext=createContext(null);
export const VendorContext = createContext(null);
export default function Context({children}){
  const [user,setUser]=useState(null)  //This is for presenting details of user in login page
  const [vendor,setVendor] = useState(null)

  const addVendor = (vendorDetails) => {
    setVendor(vendorDetails);
  };

    return(
<AuthContext.Provider value={{ user, setUser }}>
      <VendorContext.Provider value={{ vendor, addVendor }}>
        {children}
      </VendorContext.Provider>
    </AuthContext.Provider>


    )
}
