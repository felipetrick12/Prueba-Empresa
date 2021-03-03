import React,{useContext} from "react";
import {  NavLink } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext";



export const Navbar = () => {
 
    const listContext =useContext(AuthContext)

   

  return (
      
        <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu" >
            {
            listContext.map((item) => (
              <li key={item.id} >
                  {
                    (item.name==='Vivair')
                    ?
                    <NavLink to='/vivair' className="nav-link">
                        {item.name}
                    </NavLink>
                    :
                    <NavLink to='/avianca' className="nav-link">
                        {item.name}
                    </NavLink>
                  }
                
              </li>
            ))}
        </ul>
        </header>
     

  );
};
