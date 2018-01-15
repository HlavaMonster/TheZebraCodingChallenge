import React, { Component } from 'react';
import { CarrierCardList } from 'components';

class CarrierCardListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      carriers_searched: null,
      search_time: null,
      carrier_cards: [],
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    fetch('/data/carrier_cards.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          carrier_cards: data.carrier_cards,
          carriers_searched: data.carriers_searched,
          search_time: data.search_time,
          isLoading: false,
        });
      });
  }

  render() {
    if (!this.state.carrier_cards.length) {
      return false;
    }

    return (
      <div>
        {this.state.isLoading ? (
          <div>Loading results...</div>
        ) : (
          <CarrierCardList
            carrierCards={this.state.carrier_cards}
            carriersSearched={this.state.carriers_searched}
            searchTime={this.state.search_time}
          />
        )}
      </div>
    );
  }
}

export default CarrierCardListContainer;
