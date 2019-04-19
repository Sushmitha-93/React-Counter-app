import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //Render fucntion
  render() {
    //   Object destructuring
    const {
      onIncrement,
      onDelete,
      onReset,
      counters,
      onDecrement,
      onInsert
    } = this.props;

    //Return - returning JSX
    return (
      <div className="card mx-auto" style={{ width: 300 }}>
        <div className="card-body">
          <button
            className="btn btn-primary btn-sm mx-2 mb-2"
            onClick={onReset}
          >
            Reset
          </button>

          <button className="btn btn-success btn-sm mb-2" onClick={onInsert}>
            Insert
          </button>

          {/* Rendering each counter in counters as separate components */}
          {counters.map(counter => (
            <Counter //passing properties to Counter from Counters
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
