
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
        <div className="logo-container">
            <Link to="/"><img className="circle-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hcs6jrSmJM4V88uVtHWRNtaGQBswGqAp-7_-AeBO56QcRGZnfWZ2SRw&s"/></Link>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link className="no-underline" to="/">Home</Link></li>
                <li><Link className="no-underline" to="/about">About</Link></li>
                <li><Link className="no-underline" to="/contact">Contact</Link></li>
                <li><Link className="no-underline" to="/cart">Cart</Link></li>
                <button className="btn-style" onClick={ () => {
                    btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                } }
                >{btnNameReact}</button>
            </ul>
        </div>
        </div>

    );
};

export default Header;