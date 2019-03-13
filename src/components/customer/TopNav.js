import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link to="/user/customer/" className="nav-link">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user/customer/history" className="nav-link">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default TopNav;
