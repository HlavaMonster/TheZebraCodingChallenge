import React, { Component } from 'react';
import { CarrierCard } from 'components';

class CarrierCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.handleExpandCollapse = this.handleExpandCollapse.bind(this);
  }

  handleExpandCollapse() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    return (
      <CarrierCard
        isExpanded={this.state.isExpanded}
        name={this.props.carrierCard.name}
        tagline={this.props.carrierCard.tagline}
        rate={this.props.carrierCard.rate}
        ratetag={this.props.carrierCard.tag}
        onClick={this.handleExpandCollapse}
        features={this.props.carrierCard.features}
        featuresHtml={this.props.carrierCard.features_html}
        detailBody={this.props.carrierCard.detail_body}
        type={this.props.carrierCard.type}
        actionLink={this.props.carrierCard.action && this.props.carrierCard.action.link}
        actionLinkText={this.props.carrierCard.action && this.props.carrierCard.action.link_text}
        stars={this.props.carrierCard.stars}
        cornerTag={this.props.carrierCard.corner_tag}
      />
    );
  }
}

export default CarrierCardContainer;
