import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";

class Index extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <div>
        <div className="container  dwi-div">
          <div className="jumbotron">
            <div className="row">
              <div className="col margintopbottom">
                <h2>Enjoy the Best Red Wine in Our Cellars</h2>
                <h6 className="margintopbottom20">
                  SAVE $185 on the most customized wine club around
                </h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
