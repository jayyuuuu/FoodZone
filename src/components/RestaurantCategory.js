import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  console.log(data);

  const handleClick = () => {
    //   setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="">
      {/* Header */}
      <div
        className="  cursor-pointer w-6/12 bg-amber-50 shadow-lg p-3 mx-auto my-4 "
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ⏬ </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* {body} */}
    </div>
  );
};
export default RestaurantCategory;
