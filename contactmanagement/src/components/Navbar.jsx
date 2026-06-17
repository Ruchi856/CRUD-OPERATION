import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/insert">Insert</NavLink></li>
         <li><NavLink to="/view">View</NavLink></li>
         <li><NavLink to="/singleview">Single View</NavLink></li>
         <li><NavLink to="/update">Update</NavLink></li>
         <li><NavLink to="/delete">Delete</NavLink></li>

        
      </ul>
      
    </nav>
  );
}

export default Navbar
