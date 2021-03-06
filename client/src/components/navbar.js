import React, {useContext} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav style={{marginBottom:'2rem'}} className="sticky">
            <div className="nav-wrapper blue-grey darken-1" style={{padding: '0 2rem'}}>
                <span className="brand-logo">AnimalFinderApp</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={"/announcement"}>List</NavLink></li>
                    <li className="active"><a href="/" onClick={logoutHandler}>logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
