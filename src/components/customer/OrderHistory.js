import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/customer/orderActions';
import '../../assets/css/simple-sidebar.css';
import '../../assets/css/style.css';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import OrderItem from './OrderItem';

export class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { error, loading, orders } = this.props;
    return (
      <div className="d-flex" id="wrapper">
        <Sidebar />
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
                    {orders.map((item, index) => (
                      <OrderItem item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderHistory.propTypes = {
  fetchOrders: PropTypes.func,
};

const mapStateToProps = state => ({
  orders: state.orderReducer.orders,
  loading: state.orderReducer.loading,
  error: state.orderReducer.error,
});

export default connect(
  mapStateToProps,
  { fetchOrders }
)(OrderHistory);
