import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (

      <header>
         <h1> <strong>Portfolio</strong></h1>
          <ul>
             <NavLink exact activeClassName='is-active' to='./'>
             <li>Home</li>
             </NavLink> 
             
             <NavLink exact activeClassName='is-active' to='./portfolio'>
             <li>Portfolio</li>
             </NavLink> 
             
             <NavLink exact activeClassName='is-active' to='./contact'>
             <li>Contact</li>
             </NavLink> 
             
          </ul>
          <hr/>
      </header>
    )
}
export default Header;
