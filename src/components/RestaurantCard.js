import { CDN_URL } from "../utils/constants";

//Res- Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    locality,
    sla,
  } = resData?.info;
  return (
    <div className="w-60 h-[380px] space-y-2 border border-black bg-gray-300 p-2 m-2 shadow-sm rounded-md hover:bg-gray-400 hover:shadow-xl">
      <img
        className="rounded-md h-40 w-[100%]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="p-2 h-16">
        <h5 className="text-md text-black font-bold">{name}</h5>
      </div>
      <div className="h-12">
        <h6>{cuisines.join(", ")}</h6>
      </div>
      <div className=" flex justify-between text-sm p-1 ">
        <p className="bg-green-500 rounded-md px-1">{avgRating} 🌟</p>
        <p>-{costForTwo}</p>
        <p>-{sla.deliveryTime} minutes</p>
      </div>
      {/* <h6>{areaName}</h6> */}
      {/* <h6>{locality}</h6> */}
    </div>
  );
};

export const withPromotedLabel = (RestorentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 ml-4 mt-2 rounded-ee-xl">
          {" "}
          Promoted{" "}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
