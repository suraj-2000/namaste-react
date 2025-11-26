import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// import Grocery from "./components/Grocery";
// import Cart from "./components/Cart";

//Lazy loading
const Grocery = lazy(()=> import("./components/Grocery"));
const Cart = lazy(()=> import("./components/Cart"));

const AppLayout = () => {
    const [userName, setUserName] = useState("");

//API call
useEffect(()=>{
    const data = {
        name: "Suraj Singh",
    }
    setUserName(data.name);
},[]);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className="app">
                    <Header/> 
                    <Outlet/>
                </div>  
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element:<Body/>,
            },
            {
                path:"/cart",
                element:<Suspense fallback={<h1>Loading cart items...</h1>}><Cart/></Suspense>,
            },
            
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:
                <Suspense fallback={<h1>Loading groceries...</h1>}>
                    <Grocery/>
                </Suspense>,
            },
            {
                path:"/resturant/:restId",
                element:<RestaurantMenu/>,
            },
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


