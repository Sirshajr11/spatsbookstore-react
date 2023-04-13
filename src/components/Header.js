import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        <nav>
            <div classNameName="logo"><h1>spAts</h1></div>
            <div classNameName="openMenu"><i className="fa fa-bars"></i></div>
            <ul classNameName="mainMenu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/conatact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <div classNameName="closeMenu"><i classNameName="fa fa-times"></i></div>
                <span classNameName="icons">
                    <i classNameName="fab fa-facebook"></i>
                    <i classNameName="fab fa-instagram"></i>
                    <i classNameName="fab fa-twitter"></i>
                    <i classNameName="fab fa-youtube"></i>
                </span>
            </ul>
        </nav><div classNameName="intro">
                <h1 classNameName="logo-head">
                    <span classNameName="log">spAts Book</span><span classNameName="log">Store.</span>
                </h1>
            </div>
            <header>
                <h4 classNameName="header">Welcome To spAts Bookstore!</h4>
            </header>
            </>

     );
}
 
export default Header;