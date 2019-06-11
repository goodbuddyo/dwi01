import React from "react";
import axios from "axios";

class Zipcodeinput extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.get("https://www.wsjwine.com/api/address/zipcode/12345").then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div className="row">

        <div className=" col-12 col-sm-8  dwi-zip-input">
          <label>
              Zip Code:
            <input
              type="text"
              name="zipcode"
              className="dwi-zip-code"
              onChange={this.handleChange}
            />
          </label>

          <label>
          City:
         <input
          type="text"
          name="city"
          className="dwi-zip-code"
          />
         </label>

          <label>
            State:
          <input
            type="text"
            name="state"
            className="dwi-zip-code "
          />
        </label>
        </div> 

        <div className=" col-12 col-sm-4   dwi-zip-input  dwi-zip-btn">
        <label  className="dwi-btn-label">
          <button type="submit" className="dwi-zip-button btn btn-primary btn-sm">   Add </button>
        </label>
        </div> 
        
      </div> 
    </form>
    );
  }
}

// {
//   "response":{
//   "zipCode":"12345",
//   "stateName":"New York",
//   "stateCode":"NY",
//   "stateAbbrevation":"NY",
//   "city":"Schenectady",
//   "country":"US",
//   "county":"SCHENECTAD"},
//   "statusMessage":"successful",
//   "statusCode":0
// }

export default Zipcodeinput;
