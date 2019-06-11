import React, { Component } from "react";
import PropTypes from "prop-types";

export class Footer extends Component {
  render() {
    return (
      <div className="container  dwi-div">
        <div className="dwi-footer text-center">
          <p>
            <b>WINES AND OFFER MAY VARY BY STATE.</b> 100% money-back guarantee
            applies to all wines. Delivery available to AZ, CA (offer may vary),
            CO, CT, FL, GA, IA, ID, IL, IN (limited delivery area), KS, LA, MA,
            MD, ME, MI, MN, MO, MT, NC, ND, NE, NH, NJ (offer may vary), NM, NV,
            NY, OH, OK, OR (not eligible for free gift), PA, SC, SD (offer may
            vary), TN, TX (voucher not required), VA, VT, WA, WI, WV, WY and DC.
            Void where prohibited by law. WSJwine is operated independently of
            The Wall Street Journal's news department.{" "}
          </p>
          <p>
            2019 WSJwine All Rights Reserved. |{" "}
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
