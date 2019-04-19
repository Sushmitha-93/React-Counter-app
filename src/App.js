import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    console.log("Delete Handling function called ", counterID);
    const counters = this.state.counters.filter(val => val.id !== counterID);
    this.setState({ counters });
  };

  handleInsert = () => {
    const counters = [...this.state.counters]; //copy state.counters to local counters
    let counterId;
    if (counters.length == 0) counterId = 0;
    else counterId = counters[counters.length - 1].id + 1;
    counters.push({
      id: counterId,
      value: 0
    });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(val => {
      val.value = 0;
      return val;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <br />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onInsert={this.handleInsert}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
