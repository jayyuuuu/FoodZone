import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1> This is About us Page</h1>
      <User name="Jayzzzz(Function)" location="Delhi" contact="May_Jay17" />
      <UserClass
        name="Jayzz_zz(Class)"
        location="Noida"
        contact="Jay_May7teen"
      />
    </div>
  );
};
export default About;
