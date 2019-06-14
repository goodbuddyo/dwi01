import React, { Component } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

export class Menu extends Component {
  render() {
    return (
      <div className="container  dwi-div">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link href="/mymainitems">
                  <a className="nav-link">Challenge 1</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/zipcodeinput">
                  <a className="nav-link">Challenge 2</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
