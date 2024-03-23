import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
    console.log("json Fetched");
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    // console.log(data);
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.data.cards[0].card.card.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <p>
        {avgRating} Stars : {costForTwoMessage}{" "}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} --{" Rs."} {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
