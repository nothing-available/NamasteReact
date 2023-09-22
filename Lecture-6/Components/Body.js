import { restaurantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

/** 
 * useState is used to create a state variable
 * 
*/

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>


      <div className="restaurant-list">
        { restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key = {restaurant.info.resId} />;
        })}
      </div>
      </>
    );
  };

export default Body;