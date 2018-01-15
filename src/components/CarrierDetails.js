import React from 'react';

const FeaturesList = props => {
  return <ul>{props.features.map((feature, index) => <li key={index}>{feature.name}</li>)}</ul>;
};

const CarrierDetails = props => {
  return (
    <div className="carrier-details">
      {(props.featuresHtml || (props.features && props.features.length > 0)) && (
        <div className="carrier-details-section carrier-features">
          <div className="detail-header">Features</div>
          {props.featuresHtml ? (
            <div className="detail-body" dangerouslySetInnerHTML={{ __html: props.featuresHtml }} />
          ) : (
            <div className="detail-body">
              <FeaturesList features={props.features} />
            </div>
          )}
        </div>
      )}
      {props.detailBody &&
        props.detailBody.length && (
          <div className="carrier-details-section carrier-description">
            <div className="detail-header">Why {props.name}?</div>
            <div className="detail-body">{props.detailBody}</div>
          </div>
        )}
    </div>
  );
};

export default CarrierDetails;
