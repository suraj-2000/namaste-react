import React from "react";
import ReactDOM from "react-dom/client";

// Header
//   Logo 
//   Nav 
//      Home
//      About
//      Cart
// Body 
//    Search
//    ResturantCard
//        Resturants
            //   img
            //   name of res, star rating, cuisine etc
// Footer
//    Copyright
//    Links
//    Addresss
//    Contact

// const Resturant = () => {
//     return (


//     );

// };
const resData = [
  { 
    id: 1, 
    name: "Thalaiva Biryani", 
    avgRating: 4.2, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 32 
  },
  { 
    id: 2,
    name: "Biryani Blues", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 16 
  },
  { 
    id: 3,
    name: "Behrouz Biryani", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 28 
  },
  { 
    id: 4,
    name: "House of [translate:Biryan- Biryani, Kepsa and More]",
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 22 
  },
  { 
    id: 5,
    name: "The Good Bowl", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://bbk-prod-assets.s3.ap-south-1.amazonaws.com/bbk/Oct-APP-BBK125-off-1200-x-628.jpg", 
    deliveryTime: 53 
  },
  { 
    id: 6,
    name: "One Tap Biryani", 
    avgRating: 4.1, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 32 
  },
  { 
    id: 7,
    name: "Bikkgane Biryani", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://b.zmtcdn.com/data/pictures/3/307893/6d9dad14da075d37021c25041773e07b_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*", 
    deliveryTime: 39 
  },
  { 
    id: 8,
    name: "Thalaiva Biryani", 
    avgRating: 4.2, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 32 
  },
  { 
    id: 9,
    name: "Biryani Blues", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 16 
  },
  { 
    id: 10,
    name: "Behrouz Biryani", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 28 
  },
  { 
    id: 11,
    name: "House of [translate:Biryan- Biryani, Kepsa and More]", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 22 
  },
  { 
    id: 12,
    name: "The Good Bowl", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://bbk-prod-assets.s3.ap-south-1.amazonaws.com/bbk/Oct-APP-BBK125-off-1200-x-628.jpg", 
    deliveryTime: 53 
  },
  { 
    id: 13,
    name: "One Tap Biryani", 
    avgRating: 4.1, 
    cloudinaryImageId: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=660&q=80", 
    deliveryTime: 32 
  },
  { 
    id: 14,
    name: "Bikkgane Biryani", 
    avgRating: 4.3, 
    cloudinaryImageId: "https://b.zmtcdn.com/data/pictures/3/307893/6d9dad14da075d37021c25041773e07b_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*", 
    deliveryTime: 39 
  },
];





const ResturantCard = (props) => {
    const {resList} = props;
    const {name, avgRating,cloudinaryImageId,deliveryTime} = resList;
    return ( 
        <div className="res-card">
  <img 
    className="res-card-image"
    src={cloudinaryImageId}
  />
  <h3>{name}</h3>
  <h4>{"Rating:" + avgRating}</h4>
  <h4>{"Delivery Time:" + deliveryTime+ " minutes"}</h4>
</div>


    );

};
const Body = () => {
    return (
        <div className="body">
            <div className="search"> 
                Search
            </div>
            <div className="res-container">
                {resData.map((rest) => <ResturantCard key = {rest.id} resList={rest}></ResturantCard>)}
            </div>
        </div>

    );

};

const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hcs6jrSmJM4V88uVtHWRNtaGQBswGqAp-7_-AeBO56QcRGZnfWZ2SRw&s"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>

    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/> 
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


