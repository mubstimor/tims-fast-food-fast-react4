import React, { Component } from 'react';
import '../../assets/css/simple-sidebar.css';
import '../../assets/css/style.css';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

class OrderHistory extends Component {
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
            <div className="left_box">
              <div className="box-header well">
                <h2>Order History</h2>
              </div>
              <div className="form_content">
                <table>
                  <thead>
                    <tr>
                      <th>Order Period</th>
                      <th>Date Ordered</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td>Chips + Chicken</td>
                      <td>14/09/2018</td>
                      <td>Pending</td>
                      <td>
                        <a href="order_details.html">
                          <button
                            type="button"
                            className="button button_round_corner button_green"
                          >
                            {' '}
                            View{' '}
                          </button>
                        </a>
                        <a href="edit_order.html">
                          <button
                            type="button"
                            className="button button_round_corner button_blue"
                          >
                            {' '}
                            Edit{' '}
                          </button>
                        </a>
                        <a href="order_details.html">
                          <button
                            type="button"
                            className="button button_round_corner button_red"
                          >
                            {' '}
                            Cancel{' '}
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr className="even">
                      <td>Breakfast</td>
                      <td>07/09/2018</td>
                      <td>Completed</td>
                      <td>
                        <a href="order_details.html">
                          <button
                            type="button"
                            className="button button_round_corner button_green"
                          >
                            {' '}
                            View{' '}
                          </button>
                        </a>{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    );
  }
}

export default OrderHistory;
