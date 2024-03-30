import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    // console.log(this.props.name + " :child Constructor ");
  }

  async componentDidMount() {
    // console.log(this.props.name + ": child ComponentDidMount ");
    // const data = await fetch("https://api.github.com/users/jayyuuuu");
    // const json = await data.json();
    // console.log(json);

    // this.setState({
    //   UserInfo: json,
    // });

    this.timer = setInterval(() => {
      console.log("Hellooooo Sett");
    }, 1000);
    console.log("componentDidMount Called");
  }

  // ComponentDidUpdate is always called after the update cycle.
  componentDidUpdate() {
    console.log("ComponentDidUpdate Called");
  }

  //ComponentWillUnmount is Called just before the component is unmount.
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount Called");
  }

  render() {
    // const { name, location, contact } = this.props;
    // console.log(this.props.name + " : child Render ");

    const { name, location, avatar_url } = this.state.UserInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name:{name} </h3>
        <h3>Loaction: {location}</h3>
        <h3>Contact: Jay_May7teen</h3>
      </div>
    );
  }
}

export default UserClass;
