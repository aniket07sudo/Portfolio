import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../Assets/svg/logo.svg';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/"><Logo /></Link>
            </div>
            <ul className="ul-nav">
                <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                <li><NavLink to="/skills" activeClassName="active">MY SKILLS</NavLink></li>
                <li><NavLink to="/work" activeClassName="active">WORK</NavLink></li>
                <li><NavLink to="/careers" activeClassName="active">BLOG</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;