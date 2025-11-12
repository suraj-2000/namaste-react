import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [menuList, setMenuList] = useState(null);
    const { restId } = useParams();
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async ()=> {
        const proxyURL = "https://api.allorigins.win/raw?url=";
        const targetURL = `https://namastedev.com/api/v1/listRestaurantMenu/${restId}`;
        const data = await fetch(proxyURL+targetURL);
        const json = await data.json();
        setMenuList(json.data);
    }
    if(menuList === null) return  <Shimmer/>;
    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating} = menuList?.cards[2]?.card?.card?.info;
    const itemCards = menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
    console.log(itemCards)
    return (
        <div className="restaurant-card">
      {/* Restaurant Name */}
      <h1 className="restaurant-name">{name}</h1>

      {/* Background Image */}
      <div
        className="restaurant-background"
        style={{
          backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${cloudinaryImageId})`,
        }}
      ></div>

      {/* Info Panel */}
      <div className="restaurant-info">
        <h3 className="rating">Rating: {avgRating}</h3>
        <h4 className="cuisines">Cuisines: {cuisines.join(", ")}</h4>
        <h4 className="cost">{costForTwoMessage}</h4>
        <h2>Menu</h2>
        <ul className="menu-list">
            {itemCards.map((item)=>
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )}
        </ul>
      </div>
    </div>
    );
}

export default RestaurantMenu;