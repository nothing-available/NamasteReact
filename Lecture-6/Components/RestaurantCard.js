 const RestaurantCard = ({
    name,
    image,
    cuisine,
    locality,
    
  }) => {
    return (
      <div className="card">
        <img src={image.url} />
        <h2>{name}</h2>
        <h4>{cuisine.map((item) => item.name).join(', ')}</h4>
        <h4>{locality.name}</h4>
      </div>
    );
  };

  export default RestaurantCard;