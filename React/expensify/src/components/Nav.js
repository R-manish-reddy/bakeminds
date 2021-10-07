import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
export const Nav = () => {
    return (
        <div>
        <div className="branding"><h1>LOGO</h1></div>
        <div className="menu">
            <ul>
            <NavLink activeClassName='is-active' exact to='/'>
                <li>DashboardPage</li>
            </NavLink>

            <NavLink activeClassName='is-active' exact to='/Add'>
                <li>AddExpensePage</li>
            </NavLink>

            <NavLink activeClassName='is-active' exact to='/Edit'>
                <li>EditExpensePage</li>
            </NavLink>

            <NavLink activeClassName='is-active' exact to='/Help'>
                <li>HelpPage</li>
            </NavLink>


            </ul>
        </div>
            <hr/>
        </div>

    )
}
export default Nav;
