import React from 'react'
import NavBar from '../Components/ServicesFeed/NavBar/NavBar'
import Banner from '../Components/ViewPost/Banner/Banner'
import Sorting from '../Components/ViewPost/Sorting/Sorting'
import './style.css'
const View = () => {
  return (
    <div className='div'>
       <NavBar/>
       <Sorting/>
      <Banner/>
    </div>
  )
}

export default View
