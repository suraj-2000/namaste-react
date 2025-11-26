import { useSelector } from "react-redux";
import { imgId } from "./ResturantMenu";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    return (
  <div>
    {!cartItems.length ? <h1> Cart is Empty!!"</h1>:
    <ul>
      {cartItems.map((item,index) => (
        <li key={item?.card?.info?.id} className="flex items-center justify-between py-1 px-2 rounded hover:bg-gray-100">
          <span>{item?.card?.info?.name}</span>
          <div className="relative w-20 h-20">
            <img
              className="rounded-xl w-full h-full object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${imgId}`}
              alt={item?.card?.info?.name}
            />
          </div>
        </li>
      ))}
    </ul>
}
  </div>
);
}
export default Cart;