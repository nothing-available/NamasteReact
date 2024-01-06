import RestaurantCard from "./RestauranrCard";
import { restaurantList } from "../Constant";
import { useState } from 'react';


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter(
        (restaurant) => restaurant?.data?.name.includes(searchText)
    );
    return filterData;
}


const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div className="search-bar">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-button"
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;