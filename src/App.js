import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/ResturantMenu";

// import Grocery from "./components/Grocery";
// import Cart from "./components/Cart";

//Lazy loading
const Grocery = lazy(()=> import("./components/Grocery"));
const Cart = lazy(()=> import("./components/Cart"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/> 
            <Outlet/>
        </div>  
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/cart",
                element:<Suspense fallback={<h1>Loading cart items...</h1>}><Cart/></Suspense>,
            },
            
            {
                path:"/",
                element:<Body/>,
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


