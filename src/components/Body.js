import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    // useState() hooks
    const [searchBtnText, setSearchBtnText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const fetchData = async () => {
        const proxyURL = "https://api.allorigins.win/raw?url=";
        const targetURL = "https://namastedev.com/api/v1/listRestaurants";
        const data = await fetch(proxyURL+targetURL);
        const json = await data.json();
        setAllRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(()=> {
        fetchData();
        // const timer = setInterval(()=> {
        //     console.log("Namaste React!!");
        // },1000);
        //  console.log("useEffect is called!!");
        //Like unmount
        // return () => {
        //     console.log("Use effect return!!");
        //     clearInterval(timer);
        // };
    },[]);
    // Conditional Rendering
    // if(topRatedRest.length === 0) { return <Shimmer/> }
    const applyFilters = (searchBtnText, filterTopRated) => {
        let filterRest = allRestaurants;
        if(searchBtnText) {
            filterRest = filterRest.filter((rest)=> rest.info.name.toLowerCase().includes(searchBtnText.toLowerCase()));
        }
        if(filterTopRated) {
            filterRest = filterRest.filter((rest)=>rest.info.avgRating > 4);
        }
        if(!searchBtnText && !filterTopRated) {
            setSearchBtnText("");
        }
        setFilteredRest(filterRest);
    };

    if(useOnlineStatus() === false ) {
        return <h1>You are offline, please check your internet connection.</h1>
    }
    return allRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div >
                <input className="border border-gray-400 rounded-md mt-4 px-3 py-1 text-gray-900" type="text" value={searchBtnText} onChange={(e)=>{
                    setSearchBtnText(e.target.value);
                }}   onKeyDown={e => {
                if (e.key === 'Enter') {
                   applyFilters(searchBtnText, false);
                }
                }}
                ></input>
                <button className="mx-2 radius- bg-orange-600 rounded-xl px-4 py-1.5 hover:bg-orange-600 cursor-pointer" onClick={()=> {
                    applyFilters(searchBtnText, false);
                }} >Search</button>
            </div>
            <div className="filter-rest"> 
                <button className="my-2 radius- bg-orange-600 rounded-xl px-4 py-1.5 hover:bg-orange-600 cursor-pointer" onClick={()=>{
                    applyFilters("", true);
                    }}>Top Rated Resturant </button>
                <button className="mx-2 radius- bg-orange-600 rounded-xl px-4 py-1.5 hover:bg-orange-600 cursor-pointer" onClick={()=>{
                    applyFilters("", false);
                    }}>Clear Filters </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRest?.length === 0 ? <div className="centered-text"><h4>No Restaurant Found...</h4> </div>
                :filteredRest?.map((rest) => <Link  to={"/resturant/"+rest.info.id} key = {rest.info.id}><ResturantCard resList={rest}></ResturantCard></Link>)}
            </div>
        </div>

    );

};

export default Body;