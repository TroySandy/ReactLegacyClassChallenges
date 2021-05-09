import React from "react";

export default class ToDoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }

  saveInput = (e) => {
    // console.log('save input');
    this.setState({ input: e.target.value});
  };

  addNewItem = (e) => {
    // console.log('add item');
    e.preventDefault();
    this.setState((prevState) => ({
      toDoList: [...prevState.toDoList, prevState.input],
    }));
  };

  markItemAsComplete = (t) => {
    // console.log('update');
    this.setState((state) => {
      const toDoList = state.toDoList.map((item, c) => {
        if (c === t) {
          // this.setState({completed: true})
          return item + " Item is completed";
        } else {
          return item;
        }
      });
      console.log(toDoList);
    });
  };

  render() {
    console.log(this.state.toDoList);
    return (
      <div>
        <form>
          <input type="text" onChange={this.saveInput} />
          <button onClick={this.addNewItem}>Add to ToDo List</button>
        </form>
        <hr />
        <h1>ToDo List</h1>
        <ol>
          {this.state.toDoList.map((ToDo, index) => {
            return (
              <li key={ToDo}>
                {ToDo}
                <button onClick={() => this.markItemAsComplete(index)}>
                  Mark as Complete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
