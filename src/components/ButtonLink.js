import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SVGPATHS } from './Constants';

class ButtonLink extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(link) {
    window.open(link, '_blank');
  }

  render() {
    var buttonClass = classNames('btn', {
      'btn-primary': this.props.isPrimary,
    });

    return (
      <a href={this.props.buttonAction} className={buttonClass} target={this.props.newTab && '_blank'}>
        <span>
          {this.props.buttonIcon &&
            this.props.buttonIcon !== '' && (
              <span className="btn-icon" dangerouslySetInnerHTML={{ __html: SVGPATHS[this.props.buttonIcon] }} />
            )}
          <span>{this.props.buttonText}</span>
        </span>
      </a>
    );
  }
}

ButtonLink.propTypes = {
  buttonAction: PropTypes.string,
  isPrimary: PropTypes.bool,
  buttonIcon: PropTypes.string,
  buttonText: PropTypes.string,
};

export default ButtonLink;
