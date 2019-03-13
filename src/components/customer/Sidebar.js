import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-light border-right" id="sidebar-wrapper">
    <div className="sidebar-heading">Fast Food Fast </div>
    <div className="list-group list-group-flush">
      <Link
        to="/user/customer"
        className="list-group-item list-group-item-action bg-light"
      >
        Dashboard
      </Link>
      <Link
        to="/user/customer/history"
        className="list-group-item list-group-item-action bg-light"
      >
        Order History
      </Link>
    </div>
  </div>
);

export default Sidebar;
