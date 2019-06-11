import { Component } from "react";
import React from "react";

class ZipdealsCard extends Component {
  render() {
    return (
      <div className="card-body">
        <h4 className="card-title" />
        <h6 className="card-title">{this.props.zipdeals.name}</h6>
        <p className="card-text">{this.props.zipdeals.caseTypeDesc}</p>
      </div>
    );
  }
}

export default ZipdealsCard;
