import { useState } from "react";
import "../css/selectOptionSwitcher.css";
import { languageOptions, jobTypeOptions } from "../data/selectOptions.js";

function SelectOptionSwitcher({changeOptionsListFunc}) {
  const [checkedRadio, setCheckedRadio] = useState("languages");

  const handleRadioChange = (optionsType, radioId)  => {
    changeOptionsListFunc(optionsType, optionsType[0].label);
    setCheckedRadio(radioId);
  }

  return (
    <div className="radio-wrapper">
      <label htmlFor="languages" className="label">
        <input
          id="languages"
          type="radio"
          name="select-radio"
          checked={checkedRadio === "languages"}
          onChange={() => handleRadioChange(languageOptions, "languages")}
        />
        <p>Languages</p>
      </label>
      <label htmlFor="job-types" className="label">
        <input
          id="job-types"
          type="radio"
          name="select-radio"
          checked={checkedRadio === "job-types"}
          onChange={() => handleRadioChange(jobTypeOptions, "job-types")}
        />
        <p>Job Types</p>
      </label>
    </div>
  );
}

export default SelectOptionSwitcher