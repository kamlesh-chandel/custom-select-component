import { useState } from "react";
import "../css/constant.css";
import "../css/customSelectComponent.css";
import { selectOptions} from "../data/selectOptions.js";
import Option from "./Option.jsx";
import SelectOptionSwitcher from "./SelectOptionSwitcher.jsx";
import Select from "./Select.jsx";

function CustomSelect() {
  const [selectedOptionList, setSelectedOptionList] =
    useState(Object.values(selectOptions)[0]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    Object.values(selectOptions)[0][0].label
  );

  const onSelect = (value) => {
    setSelectedOption(value);
    setIsOptionsVisible(false);
  };

  const changeOptions = (options) => {
      setSelectedOptionList(options);
      setSelectedOption(options[0].label);
  };

  return (
    <div className="container">
      <SelectOptionSwitcher changeOptions={changeOptions} />
      <Select
        setIsOptionsVisible={setIsOptionsVisible}
        isOptionsVisible={isOptionsVisible}
        selectedOption={selectedOption}
      />
      {isOptionsVisible && (
        <div className="select-container">
          {

            selectedOptionList.map((item) => (
              <Option optionData={item} onSelect={onSelect} />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
