import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeAndSlide = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} timeout={500} classNames="fade-slide">
      {children}
    </CSSTransition>
  );
};

export default FadeAndSlide;
