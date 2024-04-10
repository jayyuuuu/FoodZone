import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-400 py-4 flex p-2 m-2 h-auto"
        >
          <div className="w-9/12">
            <div className="mb-2">
              <span className="block py-1 font-bold">
                {item?.card?.info?.name}{" "}
              </span>
              <span>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs mr-4">{item?.card?.info?.description} </p>
          </div>
          <div className="w-3/12 relative ">
            <img
              className="w-full rounded-md shadow-lg"
              src={CDN_URL + item?.card?.info?.imageId}
              alt="Item img"
            ></img>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <button className="bg-white px-6 text-lg shadow-2xl rounded-md text-green-500 font-bold">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
