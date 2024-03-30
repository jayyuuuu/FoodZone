import { CDN_URL } from "../utils/constants";

//Res- Card Component
const RestorentCard = (props) => {
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
    <div className="w-60 border border-black bg-zinc-300 p-2 m-2 shadow-sm rounded-md hover:bg-gray-400">
      <img
        className="rounded-md h-60 w-[100%]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="p-2 ">
        <h3 className="text-lg text-black font-bold">{name}</h3>
      </div>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
      <h6>{areaName}</h6>
      <h6>{locality}</h6>
    </div>
  );
};

export default RestorentCard;
