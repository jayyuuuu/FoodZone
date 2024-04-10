import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantcardPrompted } from "./RestaurantCard";
//Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like You are offline!!! Please check your Internet Connection.....
      </h1>
    );

  const RestaurantcardPromoted = withPromotedLabel();

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-violet-200">
      <div className="flex m-2 justify-center border-2 p-2 shadow-lg">
        <div className="search mx-20 bg-slate-500 rounded-md">
          <input
            className=" border-2 border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="mx-5"
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
          className="bg-orange-300 px-4 rounded-md"
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
      <div className="flex flex-wrap justify-center">
        {filterdRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantcardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
