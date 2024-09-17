import React from 'react'
import {route, Link} from 'react-router-dom'
import myImage from "./Images/framing.png"
import Interior from  "./Images/Interior.png"
import Roofing from  "./Images/Roofing.png"
import Navbar from "./Navbar"; 
const Home = () => {
  return (
    <div className = "home">
      
      <div className = "Home">
      <h3 className = "id">Constuction Id: 123456789123</h3> 
      
      <img src = {myImage} width = "1180px"></img>
      <h3 className = "installation">Your Facade installation process has been successfully completed, ensuring a seamless durable finish</h3>
      <div className = "Process">
      <div className = "Interior"><img  className = "image" src = {Interior} width = "300px" height = "200px" >
      </img>
      <h2 className = "roof">Interior Work</h2>
      <p className = "para">Interior work is currently in progress, focusing on delivering high-quality finishes and attention to detail. We appreciate your patience as we bring your vision to life.</p>
      <button className = "learn"><Link to = "/Finishing" className = "Learn">Learn More</Link> </button>
       </div>
      <div className = "Roofing">
        <img className = "image" src = {Roofing} width = "300px" height = "200px"></img>
        <h2 className = "roof">Roofing</h2>
        <p className = "para">The next phase in the construction process is roofing, where we will secure the structure with a durable and weather-resistant roof</p>
        <button className = "learn"> <Link to = "/Roofing" className = "Learn">Learn More</Link></button>
        </div>
      </div>
      </div>
      </div>

  )
}

export default Home