import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMenu } from '../../actions/customer/customerActions';
import '../../assets/css/simple-sidebar.css';
import '../../assets/css/style.css';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import MenuItem from './MenuItem';
import SelectedItem from './SelectedItem';

export class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  handleClick = e => {
    e.preventDefault();
    const { menu } = this.props;
    const menuItem = menu.find(food => food.id === parseInt(e.target.id));
    this.setState({ selectedItem: menuItem });
  };

  render() {
    const { error, loading, menu } = this.props;

    if (error) {
      return (
        <div className="alert alert-warning" role="alert">
          {error.message}
        </div>
      );
    }

    if (loading) {
      return (
        <div className="alert alert-primary" role="alert">
          Loading ...
        </div>
      );
    }
    return (
      <div className="d-flex" id="wrapper">
        <Sidebar />
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
                />
              </div>
              <div className="form_content" id="menu_div">
                <form method="post">
                  <div className="menu_item">
                    <div className="item header">
                      <h2>Available Items</h2>
                    </div>

                    <div className="fooditems" id="fooditems">
                      {menu.map((item, index) => (
                        <MenuItem
                          item={item}
                          handleClick={this.handleClick}
                          key={index}
                        />
                      ))}
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
                  <SelectedItem item={this.state.selectedItem} />
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
      </div>
    );
  }
}

CustomerHome.propTypes = {
  fetchMenu: PropTypes.func,
};

const mapStateToProps = state => ({
  menu: state.customerReducer.menu,
  loading: state.customerReducer.loading,
  error: state.customerReducer.error,
});

export default connect(
  mapStateToProps,
  { fetchMenu }
)(CustomerHome);
