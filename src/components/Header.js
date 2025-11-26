
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const cartItems = useSelector((store)=> store.cart.items);
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
                <li>
                    <Link to="/cart" className="relative flex items-center gap-2 no-underline text-white">
                        <span className="font-semibold">Cart</span>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2YnFrv_Xfe2SxISDyTZvIjYMvcrdg2P6TMY1tgsy4h5ei6lcQRxR0So&s"
                        alt="cart-icon"
                        className="w-8 h-8 rounded"
                        />
                        <span className="absolute top-0 right-0 rounded-full bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center font-bold translate-x-2 -translate-y-2">
                        {cartItems.length}
                        </span>
                    </Link>
                </li>

                <button className="btn-style" onClick={ () => {
                    btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                } }
                >{btnNameReact}</button>
                <li><Link className="no-underline font-bold">{loggedInUser}</Link></li>
            </ul>
        </div>
        </div>

    );

};

export default Header;