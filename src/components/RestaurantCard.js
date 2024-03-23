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
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
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
