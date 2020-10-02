import React from "react";

//import "./TextArea.styles.scss";

type TextProps = {
  labelText: String;
  placeholdervalue?: any;
  //handaleChange: any;
  //valueProp: any;
  nameVal: any;
};

const Text_Area = ({ labelText, nameVal, placeholdervalue }: TextProps) => (
  <div>
    <label className="label-value">{labelText}</label>
    <textarea
      name={nameVal}
      className="form-control text-custom"
      required
      placeholder={placeholdervalue}
      //onChange={handaleChange}
      //value={valueProp}
    />
  </div>
);

export default Text_Area;
