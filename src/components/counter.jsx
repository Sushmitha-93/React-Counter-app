import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  styles = {
    fontSize: 18
  };

  //   constructor() {
  //     super(); // Must call constructor of parent class "Component" before calling child class constructor
  //     //console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(value => (
  //         <li key={value}>{value}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   handleIncrement() {
  //     console.log("Incremmented count ", this); // this is "Undefined" if bind function is not called in constuctor
  //   }

  //Converting above function to arrow function to inherit "this" by default
  // handleIncrement = () => {
  //   //this.state.count++; //Count will increment but Rect doesnt know its changed and wont update DOM dynamically even if it is linked.

  //   //so we use setState() method of Component class
  //   this.setState({ count: this.state.count + 1 });

  //   console.log("Incremented count ", this);
  //   // console.log(prodID); // if prodID is parameter to handleIncrement function
  // };

  //***** Render Function *****/
  render() {
    console.log("props ", this.props);

    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          // To pass argument to event handling function - handleIncrement(prodID)
          // onClick={() => {
          //   this.handleIncrement({ id: 1 });
          // }}

          style={{ fontSize: 16 }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          className="btn btn-secondary btn-sm mx-2"
          style={{ fontSize: 16 }}
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* To conditionally render expression use && */}
        {/* {this.state.tags.length === 0 && <p>Create more tags!</p>} */}
        {/* {this.renderTags()}  */}
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary mx-4";
    return badgeClass;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
