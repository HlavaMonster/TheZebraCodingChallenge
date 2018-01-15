import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarrierCardButton from './CarrierCardButton';
import CarrierDetails from './CarrierDetails';
import CornerTag from './CornerTag';
import StarRating from './StarRating';
import FadeAndSlide from './TransitonFadeSlide';
import CarrierLogo from '../assets/logo-carrier-sm-default.png';
import FeaturesIconList from './FeaturesIconList';

const CarrierRate = props => {
  return (
    <div className="carrier-rate">
      <div className="rate-tag">{props.ratetag}</div>
      <div className="rate">
        <span className="currency">$</span>
        <span className="value">{props.rate && props.rate.toFixed(0)}</span>
        <span className="term">/ mo</span>
      </div>
    </div>
  );
};

class CarrierCard extends Component {
  render() {
    var carrierCardClass = classNames('carrier-card', {
      'carrier-card-expanded': this.props.isExpanded,
    });
    return (
      <div className={carrierCardClass} onClick={this.props.onClick}>
        {this.props.cornerTag && <CornerTag />}
        <div className="carrier-summary">
          <div className="carrier-info">
            <div className="carrier-logo">
              <img src={CarrierLogo} alt="carrier logo" height="60" />
            </div>
            <div>
              <div className="carrier-name">{this.props.name}</div>
              <div className="carrier-tagline">{this.props.tagline}</div>
              <div className="carrier-features-rating">
                <StarRating stars={this.props.stars} />
                {this.props.features && <FeaturesIconList features={this.props.features} />}
              </div>
            </div>
          </div>
          <div className="carrier-rate-info">
            {this.props.rate && <CarrierRate rate={this.props.rate} ratetag={this.props.ratetag} />}
            <CarrierCardButton
              buttonText={this.props.actionLinkText}
              buttonType={this.props.type}
              buttonAction={'http://www.' + this.props.actionLink}
            />
          </div>
        </div>
        <FadeAndSlide in={this.props.isExpanded} timeout={500} mountOnEnter={true} unmountOnExit={true}>
          <div>
            <CarrierDetails
              name={this.props.name}
              featuresHtml={this.props.featuresHtml}
              features={this.props.features}
              detailBody={this.props.detailBody}
              isExpanded={this.props.isExpanded}
            />
          </div>
        </FadeAndSlide>
        <div className="toggle-icon">
          <svg width="11.67" height="6.04" viewBox="0 0 11.67 6.04">
            <polygon points="5.89 6.04 0 0.74 0.67 0 5.88 4.69 11 0 11.67 0.74 5.89 6.04" fill="#959595" />
          </svg>
        </div>
      </div>
    );
  }
}

CarrierCard.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  ratetag: PropTypes.string,
  rate: PropTypes.number,
  isExpanded: PropTypes.bool,
  actionLink: PropTypes.string,
  actionLinkText: PropTypes.string,
  type: PropTypes.number.isRequired,
  stars: PropTypes.number,
  detailBody: PropTypes.any,
  features: PropTypes.array,
  featuresHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  cornerTag: PropTypes.bool,
};

export default CarrierCard;
