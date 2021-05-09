import React from "react";
import { Input } from "reactstrap";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      searchTerm: "",
      results: [],
    };
  }

  editSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
    console.log(this.state.searchTerm);
    this.searchFunction();
  };

  searchFunction = () => {
    return this.state.things.filter((thing) =>
      thing.includes(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div>
        <label htmlFor="search">Search Items</label>
        <Input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
        />
        <h3>Results:</h3>
        {!this.state.searchTerm ? (
          <>
            {" "}
            {this.state.things.map((thing) => (
              <p>{thing}</p>
            ))}{" "}
          </>
        ) : (
          <p>{this.searchFunction()}</p>
        )}
      </div>
    );
  }
}

export default SearchIndex;
