import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Firebase from './Config/Config.jsx'
import Context, { Firebasecontext } from './Store/Firebasecontext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Firebasecontext.Provider value={{Firebase}}>
      <Context> 
      <App />
      </Context>
   
   </Firebasecontext.Provider>
)
