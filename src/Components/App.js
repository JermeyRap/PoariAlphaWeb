import React, { Component, Fragment } from "react";
import BottomNavigation from "./Layouts/BottomNavigation";
import Header from "./Layouts/Header";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <Header />
          <BottomNavigation />
        </center>
      </Fragment>
    );
  }
}
