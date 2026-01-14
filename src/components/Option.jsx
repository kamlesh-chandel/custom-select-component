import "../css/option.css";

function Option({ option, selectOptionFunc }) {
  const { id, label } = option;

  return (
    <div
      key={id}
      onClick={() => selectOptionFunc(label)}
      className="option-container"
    >
      {label}
    </div>
  );
}

export default Option