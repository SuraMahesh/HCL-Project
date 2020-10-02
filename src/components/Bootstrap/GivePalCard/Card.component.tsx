import React from "react";

import "./Card.styles.scss";

type CardProps = {
  imgUrl: any;
  CardTitle: String;
  CardDetails: String;
};

const OCard = ({ imgUrl, CardTitle, CardDetails }: CardProps) => (
  <div className="card custom-card">
    <img src={imgUrl} className="card-img-top custom-img" alt="" />
    <div className="card-body">
      <h5 className="card-title">{CardTitle}</h5>
      <p className="card-text">{CardDetails}</p>
    </div>
  </div>
);
export default OCard;
