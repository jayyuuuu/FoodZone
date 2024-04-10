import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo");

  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.data.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card
      .card;

  console.log("itemCards");
  // console.log( itemCards);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("Catagories");
  console.log(categories);
  // console.log(resInfo?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
  return (
    <div className="m-4">
      <h1 className="font-bold text-5xl text-center">{name}</h1>
      <h3 className="font-bold text-l text-center">{cuisines.join(" , ")}</h3>
      <p className="font-bold text-center">
        {avgRating} Stars : {costForTwoMessage}{" "}
      </p>

      {/* <div>{catagories[0]?.card?.card?.title}</div> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
