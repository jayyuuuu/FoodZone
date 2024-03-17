import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components Our App Can have..
 *
 * Header
 * - Logo
 * - NavItems
 * Body
 * - search
 * - RestorantContainer
 * - Restorent Cards
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contacts
 */

//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/dp8ehTneJPeFUiGc7OQFBtqSKrU=/460x460:1522x1522/500x500/top/smart/99designs-contests-attachments/132/132147/attachment_132147277"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Res- Card Component
const RestorentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "535525",
      name: "The Punjabi Grill",
      cloudinaryImageId: "dva8mitdhllor7ko0fwz",
      locality: "Vikas Nagar",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["Mughlai", "Chinese", "Biryani", "Salads"],
      avgRating: 4.4,
      parentId: "212850",
      avgRatingString: "4.4",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹65",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-punjabi-grill-vikas-nagar-neemuch-neemuch-535525",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "223725",
      name: "Jaini Food",
      cloudinaryImageId: "w9aiwfgpqxxzzpk4a3qa",
      locality: "LIC Road",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["Pizzas", "Snacks", "Chinese", "South Indian", "Burgers"],
      avgRating: 4.2,
      veg: true,
      parentId: "109043",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jaini-food-lic-road-neemuch-neemuch-223725",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196456",
      name: "Anjali Fast Food",
      cloudinaryImageId: "eclkchowvv19kj3pt0rj",
      locality: "Gombai Road\n",
      areaName: "Neemuch Locality",
      costForTwo: "₹199 for two",
      cuisines: [
        "North Indian",
        "Fast Food",
        "Chinese",
        "Snacks",
        "Street Food",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "33554",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/anjali-fast-food-gombai-road-neemuch-locality-neemuch-196456",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "471899",
      name: "Ritisha Paratha House",
      cloudinaryImageId: "mgatvzoicrlv5rr2puvh",
      locality: "TIT Colony",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Thalis", "Biryani", "Salads"],
      avgRating: 4.1,
      veg: true,
      parentId: "283503",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:01:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ritisha-paratha-house-tit-colony-neemuch-neemuch-471899",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "230849",
      name: "Chick N Place",
      cloudinaryImageId: "kam1erl1nixfswyztkgk",
      locality: "CRPF road",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Thalis", "Tandoor", "Burgers"],
      avgRating: 4.4,
      parentId: "60382",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chick-n-place-crpf-road-neemuch-chawni-neemuch-230849",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196496",
      name: "Chicken To Go Restaurant",
      cloudinaryImageId: "xxspqjsnyatot2ky8goz",
      locality: "Pratap marg",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Thalis", "Chinese", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "60761",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chicken-to-go-restaurant-pratap-marg-neemuch-neemuch-196496",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "711749",
      name: "Utsav Foods",
      cloudinaryImageId: "08084c5e7590cce9bc00e13ad9fa5a3d",
      locality: "Lic Colony Road",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor", "Beverages", "Desserts"],
      avgRating: 4.2,
      veg: true,
      parentId: "220415",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/utsav-foods-lic-colony-road-neemuch-neemuch-711749",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "603684",
      name: "Chicken Comes First",
      cloudinaryImageId: "dua5dvvsvgunrdrfmxbr",
      locality: "TIT Colony",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Mughlai", "Thalis", "Snacks", "Salads"],
      avgRating: 4.1,
      parentId: "456258",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:01:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chicken-comes-first-tit-colony-neemuch-neemuch-603684",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "573396",
      name: "Hungry Hope",
      cloudinaryImageId: "ezjbwzfekqps5ezc2qf5",
      locality: "Nagar Palika Road",
      areaName: "Neemuch Locality",
      costForTwo: "₹199 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Snacks",
        "Street Food",
        "Beverages",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "104720",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hungry-hope-nagar-palika-road-neemuch-locality-neemuch-573396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "249456",
      name: "Rajbhog Thali",
      cloudinaryImageId: "jrmdhdjkycw50r6nhbrl",
      locality: "Mhow Road",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Thalis", "Desserts", "Beverages"],
      avgRating: 4,
      veg: true,
      parentId: "165440",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rajbhog-thali-mhow-road-neemuch-chawni-neemuch-249456",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "554049",
      name: "Cafe 24 Seven",
      cloudinaryImageId: "oucizw1nizdtgiilcz5a",
      locality: "Indira Nagar \n",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["Snacks", "Beverages", "Fast Food", "Street Food"],
      avgRating: 4.2,
      veg: true,
      parentId: "333253",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-24-seven-indira-nagar-neemuch-chawni-neemuch-554049",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196485",
      name: "Punjabi Tadka",
      cloudinaryImageId: "k80o9e1bltsfk7cw2tw0",
      locality: "Neemuch City Road \n",
      areaName: "Jawahar Nagar",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Mughlai", "Snacks", "Salads"],
      avgRating: 4,
      parentId: "435887",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/punjabi-tadka-city-road-jawahar-nagar-neemuch-196485",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196493",
      name: "Hotel Bharat Palace",
      cloudinaryImageId: "h4am0ytiiepwrojozurz",
      locality: "Fawara Road",
      areaName: "Jawahar Nagar",
      costForTwo: "₹199 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Biryani",
        "Snacks",
        "Chinese",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "98345",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-bharat-palace-fawara-road-jawahar-nagar-neemuch-196493",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196486",
      name: "New Laxmi Chaat And Ice Cream",
      cloudinaryImageId: "r6fusvx1bvsvqzll47qe",
      locality: "TIT Colony",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["Chaat", "Chinese", "Burgers", "Ice Cream", "Beverages"],
      avgRating: 3.8,
      veg: true,
      parentId: "147086",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/new-laxmi-chaat-and-ice-cream-tit-colony-neemuch-chawni-neemuch-196486",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "222578",
      name: "Kailash Pudi Bhandar",
      cloudinaryImageId: "w1u3d5aq3pf2vshizvdh",
      locality: "Tagore Marg",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["North Indian", "Thalis", "Snacks", "Beverages", "Rajasthani"],
      avgRating: 4.4,
      veg: true,
      parentId: "113575",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kailash-pudi-bhandar-tagore-marg-neemuch-chawni-neemuch-222578",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "225762",
      name: "Gopi Misthan Bhandar",
      cloudinaryImageId: "exykcrkqhsq0vjz1i8oa",
      locality: "Neemuch",
      areaName: "Neemuch Chawni",
      costForTwo: "₹199 for two",
      cuisines: ["Sweets", "Snacks", "Beverages", "Fast Food"],
      avgRating: 4.4,
      veg: true,
      parentId: "89116",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gopi-misthan-bhandar-neemuch-chawni-neemuch-225762",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "734473",
      name: "Suman Bakery",
      cloudinaryImageId: "7884861e69959c4ad9983eeb70726246",
      locality: "Sindhi Colony",
      areaName: "Neemuch",
      costForTwo: "₹199 for two",
      cuisines: ["Bakery", "Snacks", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "196862",
      avgRatingString: "4.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/suman-bakery-sindhi-colony-neemuch-neemuch-734473",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196491",
      name: "Jindal Restaurant",
      cloudinaryImageId: "lxng3jruntsrtbafelft",
      locality: "Jhanjharwada",
      areaName: "Fawara Chowk",
      costForTwo: "₹199 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Chinese",
        "Tandoor",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "110991",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jindal-restaurant-jhanjharwada-fawara-chowk-neemuch-196491",
      type: "WEBLINK",
    },
  },
];

//Body Component

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="input" type="text"></input>
        <button className="search-Btn">Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestorentCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

//Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
