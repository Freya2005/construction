import React from 'react'
import { Routes, Route, Link,Router} from "react-router-dom";
import SuperStructure from './Collection/SuperStructure';
import Account from './Collection/Account';
import Facade from './Collection/Facade';
import Finishing from './Collection/Finishing';
import Foundation from "./Collection/Foundation";
import Roofing from "./Collection/Roofing";
import CleanUp from "./Collection/CleanUp";
import Home from "./Collection/Home";
import Navbar from "./Collection/Navbar";


const App = () => {
  return (
    <ul className = "constructions">
           <Navbar />
            
      <Routes>
      
    
          
       
            <Route path = "/Account" element = {<Account />} />
            <Route path = "/Facade" element = {<Facade />} />
            <Route path = "/Finishing" element = {<Finishing />} />
            <Route path = "/Foundation" element = {<Foundation />} />
            <Route path = "/Roofing" element = {<Roofing />} />
            <Route path = "/SuperStructure" element = {<SuperStructure />}/>
            <Route path = "/CleanUp" element = {<CleanUp />} />
            <Route path = "/" element = {<Home />} />
            
            
            </Routes> 
            
            </ul>
        
    
  )
}

export default App