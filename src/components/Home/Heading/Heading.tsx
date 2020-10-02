import React from "react";
import "./Heading.css";

export interface HeadingProps {}

const Heading: React.SFC<HeadingProps> = () => {
  return (
    <div className="f-pos-fix f-width-100 f-z-appribbon">
      <div className="f-app-ribbon">
        <div className="heading">
          <h4 className="givepal-text heading-text">Riyapola.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Heading;
