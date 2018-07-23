import M from "materialize-css/dist/js/materialize.min.js";
import React, { Component } from "react";

export default class Parallax extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div>
        <div className="parallax-container ">
          <div className="parallax">
            <img src="../static/index-parallex.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
