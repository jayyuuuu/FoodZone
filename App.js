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
const RestorentCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <h3> Makkhan Da Dhaba</h3>
      <h4>Dal Bati, Rajasthani, Indori</h4>
      <h5>4.9 stars</h5>
      <h6>20 minutes</h6>
    </div>
  );
};

//Body Component

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="input" type="text"></input>
        <button className="search-Btn">Search</button>
      </div>
      <div className="res-container">
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
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
