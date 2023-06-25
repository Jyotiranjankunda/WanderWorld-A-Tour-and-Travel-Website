import "./NavbarStyles.css";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {

  // The 'state' holds the initial value of the hamburger icon.
  state = {
    clicked: false
  };

  // This is a function to alter the state. If someone clicks on the hamburger icon, then it will be changed to cross icon and vice versa.
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  // If you want to extend from Component then you have to use render() function.
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">WanderWorld</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className = {item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
