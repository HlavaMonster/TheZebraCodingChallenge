import React from 'react';
import PropTypes from 'prop-types';

const StarRating = props => {
  if (!props.stars) {
    return null;
  }

  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} width="15.6" height="14.99" viewBox="0 0 15.6 14.99" alt="star">
        <path
          d="M7.8,0,9.95,5.31l5.66.42-4.33,3.7L12.62,15,7.8,12,3,15,4.33,9.42,0,5.73l5.66-.42Z"
          fill={props.stars > i ? '#fec43e' : '#EEEEFA'}
        />
      </svg>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

StarRating.propTypes = {
  stars: PropTypes.number,
};

export default StarRating;
