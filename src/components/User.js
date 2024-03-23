import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count :{count}</h2>
      <h2>Count2 :{count2}</h2>
      <h3>Name : {props.name} </h3>
      <h3>Loaction: {props.location}</h3>
      <h3>Contact : {props.contact}</h3>
    </div>
  );
};
export default User;
