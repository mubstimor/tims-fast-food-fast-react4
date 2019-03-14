import React from 'react';

const MenuItem = ({ item, handleClick }) => (
  <div className="food_item">
    <div className="food_description">
      <div className="food_item_label">
        <h3>
          <span>{item.name}</span>
        </h3>
      </div>
      <div className="price-right">
        <span>
          <a href="#" onClick={handleClick} id={item.id}>
            {item.price}
            <div className="circle plus" id={item.id} />
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default MenuItem;
