import { createContext, useState } from "react";

export const VendContext = createContext()

function VendProvider({children}){
    const [vend, setVend] = useState();
    return(
        <VendContext.Provider value={{vend,setVend}}>
            {children}
        </VendContext.Provider>
    )
}

export default VendProvider