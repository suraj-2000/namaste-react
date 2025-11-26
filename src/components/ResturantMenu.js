import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

let imgId;
const RestaurantMenu = () => {
    const { restId } = useParams();
    const menuList = useResturantMenu(restId);
    const [showMenu, setShowMenu] = useState(false);
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    if(menuList === null) return  <Shimmer/>;
    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating} = menuList?.cards[2]?.card?.card?.info;
    const itemCards = menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
    //  console.log(itemCards)
    imgId = cloudinaryImageId;

    const showMenuList = ()=> {
      setShowMenu(!showMenu);
      // console.log(showMenu);
    }
    const handleAdd = (item)=> {
      dispatch(addItem(item));
      console.log(cartItems);
    }
    return (
        <div className="flex justify-center">
  <div className="w-full max-w-md">
    
    {/* Background Image */}
    <div
      className="w-full h-48 bg-cover bg-center rounded-lg shadow-md mb-4"
      style={{
        backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${cloudinaryImageId})`,
      }}
    >
    </div>
    
    {/* Info Panel */}
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h1 className="font-bold text-3xl m-4">{name}</h1>
      <h3 className="text-lg font-semibold mb-2">Rating: {avgRating}</h3>
      <h4 className="mb-1">Cuisines: {cuisines.join(", ")}</h4>
      <h4 className="mb-3">{costForTwoMessage}</h4>
      <div className="text-xl font-bold mb-4 space-x-10 flex justify-center">
      <span >Menu List:</span>
      <span className="cursor-pointer" onClick={showMenuList}>{!showMenu ? "▼" : "▲"}</span>
      </div>
      <ul className="menu-list space-y-2">
        {showMenu && itemCards.map((item) => (
          <li key={item?.card?.info?.id} className="flex items-center justify-between py-1 px-2 rounded hover:bg-gray-100">
              <span>{item?.card?.info?.name}</span>
              <div className="relative w-20 h-20">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${cloudinaryImageId}`}
                  alt={item?.card?.info?.name}
                />
                <button
                  className="absolute bottom-0 right-0 translate-x-1/5 translate-y-1/5 bg-orange-600 font-bold text-white rounded px-2 py-1 cursor-pointer hover:bg-orange-700 transition"
                  onClick={()=>handleAdd(item)}
                >
                  +Add
                </button>
              </div>
           </li>


          
        ))}
      </ul>
    </div>
  </div>
</div>
);
}
export {imgId};
export default RestaurantMenu;