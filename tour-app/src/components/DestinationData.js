import "./DestinationStyles.css";
import React, { Component } from "react";
import image14 from "../assets/14.jpg";
import image10 from "../assets/10.jpg";

export class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="Image" />
          <img src={this.props.img2} alt="Image" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
