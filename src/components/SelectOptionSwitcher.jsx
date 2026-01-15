import { useState } from "react";
import "../css/selectOptionSwitcher.css";
import { selectOptions } from "../data/selectOptions";

function SelectOptionSwitcher({ changeOptions }) {
  const [selectedRadio, setselectedRadio] = useState(Object.keys(selectOptions)[0]);

  const handleRadioChange = (item) => {
    changeOptions(item[1]);
    setselectedRadio(item[0]);
  };

  return (
    <div className="radio-wrapper">
      {Object.entries(selectOptions).map((item) => {
        return (
          <label htmlFor={item[0]} className="label">
            <input
              id={item[0]}
              type="radio"
              name="select-radio"
              checked={selectedRadio === item[0]}
              onChange={() => handleRadioChange(item)}
            />
            <p>{item[0]}</p>
          </label>
        );
      })}
    </div>
  );
}

export default SelectOptionSwitcher;
