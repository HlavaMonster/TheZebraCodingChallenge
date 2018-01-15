import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';

const CarrierCardButton = props => {
  if (props.buttonType === 2) {
    return null;
  }

  let isPrimary = props.buttonType === 3;

  return (
    <ButtonLink
      buttonAction={props.buttonAction}
      buttonIcon={isPrimary ? 'IconBoltWhite' : 'IconArrowDown'}
      buttonText={props.buttonText || 'Buy Now'}
      isPrimary={isPrimary}
      newTab={true}
    />
  );
};

CarrierCardButton.propTypes = {
  buttonAction: PropTypes.string,
  buttonText: PropTypes.string,
  buttonType: PropTypes.number,
};

export default CarrierCardButton;
