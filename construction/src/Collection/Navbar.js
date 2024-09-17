import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [set, unSet] = useState(false);
  



  return (
    <div className = "nav">
         <ul className = "Navbar">

                  <h1 className = "Benzene"><Link className = "benzene" to = "/">Benzene</Link></h1>
        
               
               <li> <Link to = "/Facade" className = "Facade">Facade </Link>
            </li>
            <li><Link to = "/Finishing"className = "Facade"> Finishing </Link></li>
            <li><Link to = "/Foundation"className = "Facade"> Foundation </Link></li>
            <li><Link to = "/Roofing"className = "Facade"> Roofing </Link></li>
            <li><Link to = "/SuperStructure"className = "Facade"> Super Structure </Link></li>
            <li><Link to = "/CleanUp"className = "Facade"> Clean Up</Link></li>
            <li><Link to = "/"className = "Facade"> Home</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar
