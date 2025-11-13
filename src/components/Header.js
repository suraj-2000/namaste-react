
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="flex justify-between bg-green-500 shadow-xs sm:bg-sky-500 lg:bg-orange-600">
        <div className="">
            <Link to="/"><img className="w-33" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hcs6jrSmJM4V88uVtHWRNtaGQBswGqAp-7_-AeBO56QcRGZnfWZ2SRw&s"/></Link>
        </div>
        <div>
            <ul className="flex m-5 p-5 gap-10 text-white text-xl">
                <li className="no-underline">Online Status: {useOnlineStatus() ? "✅" : "⛔"}</li>
                <li><Link className="no-underline" to="/">Home</Link></li>
                <li><Link className="no-underline" to="/about">About</Link></li>
                <li><Link className="no-underline" to="/contact">Contact</Link></li>
                <li><Link className="no-underline" to="/grocery">Grocery</Link></li>
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