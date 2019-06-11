import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container dwi-div">
        <div className="row">
          <div className="col-5 c text-center">
            <div className="dwi-header-logo">
              <img
                src="/static/dwi/img/wsj_logo_rebrand.png"
                className="dwi-logo-image"
              />
            </div>
          </div>
          <div className="col-7  text-lg-right">
            <div className="dwi-header-slogan">
              <p>
                Uncork Our Top 12 Wines
                <br />
                PLUS Bonus Bottles &amp; Glasses
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
