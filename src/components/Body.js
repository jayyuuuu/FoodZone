import RestorentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // IN useEffect Hook-
  // if no dependency Array                   => useEffect is called on every render.
  // if depencency Array is Empty []          => useEffect is called on initial render (Just Once).
  // if there is some dependency in the array => useEffect is called every time the dependency is updated.
  //            if we have use btnNameReact in dependency array - [btnNameReact] => then useEffect is called every time the btnNameReact is updated.

  // useEffect will definitely called after initial render everytime.
  //Whenever local state variable updates react trigggerd re-conciliation cycle (re-render the component)
  useEffect(() => {
    fetchData();
    console.log("data fatched");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //OPTIONAL CHAINING
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //Filter the Restaurant cards and update the UI
              //Search TExt
              const filterdRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdRestaurants(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            // setListOfRestaurants(filterdList);
            setFilterdRestaurants(filterdList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestorentCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
