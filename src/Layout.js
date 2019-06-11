import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Header from "./Header";

export class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Menu />
        <Header />

        {children}
        <Footer />
      </React.Fragment>
    );
  }
}
