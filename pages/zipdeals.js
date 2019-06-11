import React from "react";
import axios from "axios";
import Zipcodeinput from './zipcodeinput'
import ZipcodeList from './zipcodelist'

class Zipdeals extends React.Component {
  static async getInitialProps() {
    var promise = axios
      .get("http://localhost:4000/zipdeals")
      .then(response => {
        return {
          hasErrored: false,
          sessionData: response.data
        };
      })
      .catch(error => {
        return {
          hasErrored: true,
          message: error.message
        };
      });
    return promise;
  }
  render() {
    return (
      <div className="container dwi-div dwi-card">
        <div className="row">
          <div className="card-deck">
            <div className="card col-8  col-sm-8 cardmin margintopbottom">
              <div className="card-body">
                <h6 className="card-title">Challenge 2 </h6>
                <Zipcodeinput />
                <p className="card-text"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Zipdeals;
