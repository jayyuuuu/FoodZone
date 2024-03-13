import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element -JS Object => (render)HTML Element.
// JSX - HTML like or XML like Syntex // Not HTML in JS.
// JSX (transpiled before it reaches to JS)-  PARCEL - Babel
// JSX => Babel transpiles it to React.CreateElement => React Element- JS object => (render) HTML Element.

//react element
// const heading = <h1 className="head">React from JSX....</h1>;

const title = (
  <h1 className="head" tabIndex="5">
    React from JSX....
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1 className="heading"> I am React From React Functional Component</h1>
    </div>
  );
};

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
