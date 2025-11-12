
//Custom Hook
import { useEffect, useState } from "react";

const useResturantMenu = (restId) => {
    const [menuList, setMenuList] = useState(null);
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
    return menuList;
}

export default useResturantMenu;