import React, { Component } from "react";
import Header from "../components/Header";
import './click.css'

export default class Click extends Component {
  render() {
    return (
      <>
        <Header />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <button className="btn btn-danger mr-2" type="button">First Button</button>
        <button className="btn btn-danger mr-2" type="button">Second Button</button>
      </>
    );
  }
}