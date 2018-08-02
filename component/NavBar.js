import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed black z-depth-5">
        <nav>
          <div className="nav-wrapper black">
            <a href="/" className="brand-logo">
              WEBlogs
            </a>
            <a href="/" className="brand-logo center" />
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/">Kanishk Srivastava</a>
              </li>
            </ul>`
          </div>
        </nav>
      </div>
    );
  }
}
