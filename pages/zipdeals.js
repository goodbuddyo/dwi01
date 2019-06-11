import React from 'react';
import axios from 'axios';

class Zipdeals extends React.Component {

    static async getInitialProps() {
      return {};
  }
  
  render() {
    return (
      <div className="container dwi-div dwi-card">
          <div>
            <h5>Challenge #2</h5>
          </div>
        <div className="row">

          <div className="card-deck">
            <div className="card col-4 cardmin margintopbottom" >
              <div className="card-body">
                <h4 className="card-title">  </h4>
                <h6 className="card-title">test</h6>
                <p className="card-text">test   </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Zipdeals

