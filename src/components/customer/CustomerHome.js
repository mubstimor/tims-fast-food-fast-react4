import React, { Component } from 'react';
import '../../assets/css/simple-sidebar.css';
import '../../assets/css/style.css';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

class CustomerHome extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <TopNav />
          <div className="container-fluid">
            <div className="menu_box">
              <div className="box-header well">
                <h2> Food Menu</h2>
              </div>
              <div className="center">
                <div
                  className="alert alert-info"
                  id="alert-box"
                  style={{ display: 'none' }}
                >
                  {/* populate this dynamically */}
                </div>
              </div>
              <div className="form_content" id="menu_div">
                <form method="post">
                  <div className="menu_item">
                    <div className="item header">
                      <h2>Available Items</h2>
                    </div>
                    <div className="fooditems" id="fooditems">
                      <div className="fooditems" id="fooditems">
                        <div className="food_item">
                          <div className="food_description">
                            <div className="food_item_label">
                              <h3>
                                <span>Chips + Chicken</span>
                              </h3>
                            </div>
                            <div className="price-right">
                              <span>
                                <a href="#">15000Ush</a>
                                <div className="circle plus">
                                  <a href="#" />
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="checkout_box">
              <h2>Your Order</h2>
              <form method="post" name="order_form">
                <div id="default_label">Nothing ordered yet</div>
                <div className="order_item" id="added_item">
                  {/* populate with selected items */}
                </div>
                <div className="spacer" />
                <div className="form-btn center">
                  <div className="btn-submit">
                    <input
                      type="button"
                      className="center button button_round_corner button_green"
                      defaultValue="Submit Order"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    );
  }
}

export default CustomerHome;
