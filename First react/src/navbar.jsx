import React from 'react'
import './navbar.css'

const Navbar = (props) => {

    return (
    <div className="navbar">
    <h1>My App</h1>
    <ul>
        <li>{props.homeText}</li>
        <li>{props.aboutText}</li>
        <li>{props.contactText}</li>
    </ul>
    </div>
)
}

export default Navbar
