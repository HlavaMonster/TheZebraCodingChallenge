import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SorterDropdown extends Component {
  render() {
    return (
      <div className="sorter">
        <span>Sort by:</span>
        <select value={this.props.value} onChange={this.props.changeHandler}>
          <option value="best">Best matches</option>
          <option value="rating">Rating (stars)</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="price">Price</option>
        </select>
      </div>
    );
  }
}

SorterDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeHandler: PropTypes.func.isRequired,
};

export default SorterDropdown;
