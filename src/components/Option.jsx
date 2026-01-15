import "../css/option.css";

function Option({ optionData, onSelect }) {
  const { id, label } = optionData;

  return (
    <div key={id} onClick={() => onSelect(label)} className="option-container">
      {label}
    </div>
  );
}

export default Option;
