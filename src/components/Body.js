import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [topRatedRest, setTopRatedRest] = useState(resData);
    return (
        <div className="body">
            <div className="filter-rest"> 
                <button onClick={()=>{
                    const filterRest = topRatedRest.filter((rest)=>rest.avgRating > 4);
                    setTopRatedRest(filterRest);
                    }}>Top Rated Resturant </button>
            </div>
            <div className="res-container">
                {topRatedRest.map((rest) => <ResturantCard key = {rest.id} resList={rest}></ResturantCard>)}
            </div>
        </div>

    );

};

export default Body;