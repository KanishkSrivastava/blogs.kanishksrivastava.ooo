import M from "materialize-css/dist/js/materialize.min.js";
import React, { Component } from "react";

export default class Parallax extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }
  render() {
    return (
      <div>
        <div className="parallax-container ">
          <div className="parallax">
            <img
              alt="parallax image of React Native which is set as a top background"
              src={`../static/${this.props.name}`}
            />
          </div>
        </div>
      </div>
    );
  }
}
