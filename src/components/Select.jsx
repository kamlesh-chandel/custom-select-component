function Select({setIsOptionsVisible, isOptionsVisible, selectedOption}) {
  return (
    <>
      <div
        className="select-wrapper"
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        <h1>{selectedOption}</h1>
        {!isOptionsVisible && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#666666"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        )}
        {isOptionsVisible && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#666666"
          >
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
          </svg>
        )}
      </div>
    </>
  );
}

export default Select;
