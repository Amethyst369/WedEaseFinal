import React from 'react'
import Bannersection from '../Components/Home/Bannersection'
import NavBar from '../Components/ServicesFeed/NavBar/NavBar'
import PostCategories from '../Components/ServicesFeed/PostCategories/PostCategories'
import './style.css'
const ServiceFeed = () => {
  return (
    <div className='div'>
      <NavBar/>
      <Bannersection/>
      {/* <SortingTool/> */}
      <PostCategories/>
      
    </div>
  )
}

export default ServiceFeed
