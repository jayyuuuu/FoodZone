import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// let btnName = "Login";

//Header
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="flex justify-between bg-yellow-200 h-20 shadow-lg">
      <div className="logo-container">
        <img className="w-28 h-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to="">Home</Link>
          </li>
          <li className="px-2">
            <Link to="about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
