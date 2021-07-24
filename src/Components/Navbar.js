import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../Assets/svg/new_logo.svg';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/"><Logo /></Link>
            </div>
            <ul className="ul-nav">
                <li activeClassName="active"><NavLink to="/about" >ABOUT</NavLink></li>
                <li activeClassName="active"><NavLink to="/skills" >MY SKILLS</NavLink></li>
                <li activeClassName="active"><NavLink to="/work" >WORK</NavLink></li>
                <li activeClassName="active"><NavLink to="/contact" >CONTACT</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;