const ResturantCard = (props) => {
    const {resList} = props;
    const {name, avgRating,cloudinaryImageId,locality} = resList?.info;
    return ( 
        <div className="res-card">
  <img
        className="res-card-image"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" + cloudinaryImageId }
        alt={name || "Restaurant Image"}
      />
  <h3>{name}</h3>
  <h4>{"Rating:" + avgRating}</h4>
  <h4>{locality}</h4>
</div>
    );
};

export default ResturantCard;