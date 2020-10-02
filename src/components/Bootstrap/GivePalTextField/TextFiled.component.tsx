import React from "react";

import "./TextFiled.styles.scss";

type TextProps = {
  labelText: String;
  //placeholdervalue: any;
  textType: any;
  //handaleChange: any;
  //valueProp: any;
  nameVal: any;
}

const Text_Input = ({
  labelText,
  //placeholdervalue,
  textType,
  nameVal,
}: TextProps) => (
  <div>
    <label className="label-value">{labelText}</label>
    <input
      name={nameVal}
      className="form-control text-custom"
      type={textType}
      required
      //placeholder={placeholdervalue}
      //onChange={handaleChange}
      //value={valueProp}
    />
  </div>
);

export default Text_Input;
