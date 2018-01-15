import React from 'react';
import { SVGPATHS } from './Constants';

const getSVGforIconClass = iconClass => {
  return SVGPATHS[iconClass];
};

const FeaturesIconList = props => {
  return (
    <ul className="features-icon-list">
      {props.features.map((feature, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: getSVGforIconClass(feature.icon) }} />
      ))}
    </ul>
  );
};

export default FeaturesIconList;
