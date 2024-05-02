import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
  const Navigate = useNavigate();
 const Navs = ()=>{
  Navigate('/services')
 }


  return (

    <div className="main_div">

   

   <div className="div_for_first_image_and_the_pic">
    <div className="image_for_show_more_button">
      <div className="contents_in_the_image">
        <div className="to_align_the_text">
        Discover everything you need to plan your big day <br />
        </div>
        <div className="to_show_more_text"  onClick={Navs}  >
          get started
        </div>





      </div>
    </div>
   </div>





   <div className="catogories_for_home_page">
   <h1>Enjoy planning your wedding</h1>
   <h3>Start planning your wedding with us, it's free!</h3>


   </div>

   <div className="pic_and_catogories_home_page">

    <div className="catogories_first_row">
      <div className="wedding_venues">
        <div className="text_on_venues"  onClick={Navs} >
        <h3>Wedding venues</h3>
            <h4>Photos, reviews, and so much more... get in touch from here!</h4>
            <h6>Explore Venues</h6>
        </div>
      </div>

      <div className="vendors_catogory_in_home_page">
        <div className="text_on_venues" onClick={Navs} >
        <h3>Vendors</h3>
            <h4>Find the top-rated wedding vendors near you in every category.</h4>
            <h6>start your search</h6>
        </div>

      </div>



    </div>

    <div className="catogories_row_two">
      <div className="your_free_wedding_website" onClick={Navs}>
      <h4>Your free wedding website</h4>
        <h5>Make your big day unforgotabble with WEDEASE</h5>
        <h6>Get Started</h6>
      </div>

      <div className="infinite_inspiration" onClick={Navs} >

        
      <h4>Infinite inspiration</h4>
        <h5>All the freshest wedding inspiration, trends and ideas in one place.</h5>
        <h6>Get inspired here</h6>
      </div>

      <div className="planning_tools_in_row_two" onClick={Navs} >
      <h4>planning-tools</h4>
        <h5>Custom planning tools to manage your checklist, budget, guests and vendors</h5>
        <h6>Discover our tools</h6>
      </div>


    </div>


   </div>



   <div className="show_more_catogories_button" onClick={Navs} >
    <div className="show_more_catogory_text" >
    More Catogories
    </div>
   </div>




   <div className="insightful_inspirations1">
    <div className="row_of_insightful_inspiration">
      <div className="text_content_insightful_inspiration">
      <h1>Wedding Ideas and
                Expert Advice</h1>
                <h2>Get inspired with creative ideas, expert advice and
                    amazing real weddings</h2>


                <ul>
                    <li>Expert Tips from a trusted team of pros...serious professionals
                    </li>
                    <li>Real Weddings to help you get some ideas (and related supplier links) for your own wedding</li>
                    <li>‘How To’ Tips as your wedding guide so you feel confident in picking suppliers and choosing wedding details</li>
                </ul>
      </div>
    </div>
   </div>





   <div className="background_of_the_footer">
    <div className="foreground_of_the_footer">
      <div className="row1_in_foreground_of_the_footer">
        
      <h1>About us</h1>
        <h5>about us</h5>
        <h5>press and media</h5>
        <h5>wedease2024@gmail.com</h5>
      </div>
      <div className="row2_in_foreground_of_the_footer">
        
      <h1>Wedding Manager</h1>
        <h5>manager tools</h5>
        <h5>Wedding suppliers</h5>
        <h5>Ideas & inspirations</h5>
      </div>
      <div className="row3_in_foreground_of_the_footet">
      <h1>Business</h1>
        <h5>business</h5>
        <h5>admins</h5>
        <h5>vendors</h5>
      </div>
    </div>
   </div>

   </div>
    
  )
}

export default Banner
