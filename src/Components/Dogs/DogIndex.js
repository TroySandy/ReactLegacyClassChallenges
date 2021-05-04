import React from "react";

export default class DogFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  refreshPage = () => {
    window.location.reload();
  }

  componentDidMount() {
    console.log("pic received");
    // console.log(this.state.img);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          img: data.message,
        });
      })
      .catch(console.log);
    console.log(this.state.img);
  }

  render() {
    return (
      <div>
        <img src={this.state.img} alt="doggie" />
        <button onClick={ this.refreshPage }>click me!</button>
      </div>
    );
  }
}
