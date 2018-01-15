import React, { Component } from 'react';
import sortBy from 'lodash.sortby';
import { CarrierCardContainer } from 'containers';
import { SorterDropdown } from 'components';

class CarrierCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorter: 'best',
    };
    this.handleSortingChange = this.handleSortingChange.bind(this);
  }

  handleSortingChange(event) {
    this.setState({
      sorter: event.target.value,
    });
  }

  getSorterProperty() {
    let sorter = '';
    switch (this.state.sorter) {
      case 'alphabetical':
        sorter = 'card_order_a_to_z';
        break;
      case 'rating':
        sorter = 'stars';
        break;
      case 'price':
        sorter = 'card_order_price';
        break;
      case 'best':
      default:
        sorter = 'card_order_best_match';
        break;
    }
    return sorter;
  }

  render() {
    return (
      <div className="carrier-card-list">
        <div className="search-summary-section">
          <div className="search-summary">
            You just compared <span>{this.props.carriersSearched} rates</span> in{' '}
            {Math.ceil(this.props.searchTime / 1000 / 60)} minutes!
          </div>
          <div className="sorting">
            <SorterDropdown val={this.state.sortOrder} changeHandler={this.handleSortingChange} />
          </div>
        </div>
        {sortBy(this.props.carrierCards, card => {
          return card[this.getSorterProperty()];
        }).map((card, index) => <CarrierCardContainer key={index} carrierCard={card} />)}
      </div>
    );
  }
}

export default CarrierCardList;
