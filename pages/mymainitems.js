import React from "react";
import axios from "axios";
import Link from "next/link";

class Mymainitems extends React.Component {
  static async getInitialProps() {
    var promise = axios
      .get("http://localhost:4000/mymainitems")
      .then(response => {
        return {
          hasErrored: false,
          mymainitemsData: response.data
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

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      mymainitemsData: props.mymainitemsData
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="container dwi-div dwi-card">
        <div>
          <h5>Challenge #1</h5>
        </div>
        <div className="row">

          <div className="card-deck">
            <div className="card col-10 cardmin margintopbottom dwi-form-section">

              <div className="section-header section-header-1">
                <h3>Which Case Would You Like?</h3>
              </div>
              <p>
              Whatever you choose, we'll add in two bonus Cabs and two crystal glasses and you'll have the complete package – worth over $250 – for ONLY $69.99 (plus $19.99 shipping &amp; applicable tax; please allow 5-10 days for delivery, depending on shipping state).
              </p>

              <div className="dwi-radio-items">
              {this.state.mymainitemsData.map((mymainitems) =>

                <div className="form-check"  key={mymainitems.id}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                <strong>{mymainitems.name} </strong>  +  BONUS Bottles & Glasses
                <br /><strong> JUST   ${mymainitems.salePrice} </strong>  {mymainitems.numberOfBottles} Bottles
                <Link href="/zipdeals">
                  <a className=" dwi-view-deal">view wines</a>
                </Link>
                </label>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mymainitems;
