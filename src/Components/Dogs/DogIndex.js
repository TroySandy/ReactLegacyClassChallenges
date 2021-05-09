import React from "react";

export default class DogFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  dogFetch = () => {
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
        {(this.state.img) ? <img src={this.state.img} alt="doggie" /> : <> </>}
        
        <button onClick={ this.dogFetch }>click me!</button>
      </div>
    );
  }
}
