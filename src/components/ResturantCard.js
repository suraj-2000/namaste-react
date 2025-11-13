const ResturantCard = (props) => {
    const {resList} = props;
    const {name, avgRating,cloudinaryImageId,locality} = resList?.info;
    return ( 
        <div className="m-4 p-4 w-[300px] bg-gray-200 rounded-xl hover:bg-gray-300">
  <img
        className="rounded-xl"
        src={name != "Spice Kingdom" ? "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" + cloudinaryImageId:
             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/95eb6ffd-42c1-4288-b799-8d90d6dc3e14_953786.jpg"}
        alt={name || "Restaurant Image"}
      />
  <h3 className="font-bold py-2 text-lg">{name}</h3>
  <h4>{"Rating:" + avgRating}</h4>
  <h4>{locality}</h4>
</div>
    );
};

export default ResturantCard;