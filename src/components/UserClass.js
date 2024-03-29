import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.name + " :child Constructor ");
  }

  componentDidMount() {
    // console.log(this.props.name + ": child ComponentDidMount ");
  }

  render() {
    const { name, location, contact } = this.props;
    // console.log(this.props.name + " : child Render ");
    return (
      <div className="user-card">
        <h3>Name:{name} </h3>
        <h3>Loaction: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
