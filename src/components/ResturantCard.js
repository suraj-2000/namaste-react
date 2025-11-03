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

export default ResturantCard;