import * as React from "react";
import "./style.css";

const Navbar = () => (
  <header className="navbar mx-auto px-[120px]">
    <div className="flex items-center">
      <img src="./logo.svg" alt="brand_logo" className="mr-8" />
      <div className="navbar__item">Movies</div>
      <div className="navbar__item">TV Show</div>
      <div className="navbar__item">People</div>
      <div className="navbar__item">More</div>
    </div>
    <div className="flex items-center">
      <div className="navbar__item">Log In</div>
      <div className="navbar__item">Join Us</div>
    </div>
  </header>
);

export default Navbar;
