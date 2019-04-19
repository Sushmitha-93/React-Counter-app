import React, { Component } from "react"; //imrc
import "../navbar.css";

//STATELESS FUNCTION COMPONENT (sfc) instead of using Class to define component
const Navbar = ({ totalCounters }) => {
  //Object destructuring using {}
  return (
    <nav className="navbar navbar-light navColor">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="float-right">
        Counters Running
        <span
          className="badge badge-info badge-pill ml-2"
          style={{ fontSize: 20 }}
        >
          {/* {this.props.totalCounters} */} {/* "this" Only works in Class */}
          {/* {props.totalCounters} */}
          {/* if props is taken as argument in function */}
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light navColor">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-info badge-pill m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
