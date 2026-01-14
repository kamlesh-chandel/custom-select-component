import { useState } from "react";
import "../css/constant.css";
import "../css/customSelectComponent.css";
import { languageOptions } from "../data/selectOptions.js";
import Option from "./Option.jsx";
import SelectOptionSwitcher from "./SelectOptionSwitcher.jsx";
import Select from "./Select.jsx";

function CustomSelectComponent() {
  const [selectedList, setSelectedList] = useState(languageOptions);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(languageOptions[0].label);

  const selectOptionFunc = (value) => {
    setSelectedOption(value);
    setIsOptionsVisible(false);
  };

  const changeOptionsListFunc = (arr, value) => {
    setSelectedList(arr);
    setSelectedOption(value);
  };

  return (
    <div className="container">
      <SelectOptionSwitcher changeOptionsListFunc={changeOptionsListFunc} />
      <Select
        setIsOptionsVisible={setIsOptionsVisible}
        isOptionsVisible={isOptionsVisible}
        selectedOption={selectedOption}
      />
      {isOptionsVisible && (
        <div className="select-container">
          {selectedList.map((option) => (
            <Option option={option} selectOptionFunc={selectOptionFunc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelectComponent;
