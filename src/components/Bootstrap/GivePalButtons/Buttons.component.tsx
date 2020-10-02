import React from "react";

import "./Buttons.styles.scss";

type ButtonProps = {
  ButtonType?: any;
  ButtonName: String;
  classType: any;
};

const CustomButton = ({ ButtonType, ButtonName, classType }: ButtonProps) => (
  <div>
    <button type={ButtonType} className={classType}>
      {ButtonName}
    </button>
  </div>
);

export default CustomButton;
