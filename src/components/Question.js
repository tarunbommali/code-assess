import React, { useState } from "react";

const Question = ({
  questionNo,
  questionLevel,
  questionText,
  options,
  isActive,
  onNext,
  onPrev,
}) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={`flex flex-col w-[80%] shadow-md px-2 ${
        isActive ? "block" : "hidden"
      }`}
    >
      <div className="min-h-[100%]">
        <div className="flex justify-between items-center text-xl font-semibold text-black">
          <h1>Question No: {questionNo}</h1>
          <h1>{questionLevel}</h1>
        </div>
        <h1 className="mt-8 my-2 font-bold text-lg ">{questionText}</h1>

        {/* Options mapped dynamically */}
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name={`option${questionNo}`} // Ensure unique names for radio buttons
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => handleOptionSelect(option.value)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between bottom-0">
        <button
          className="my-4 py-2 font-semibold px-6 rounded-md border-2 border-blue-600"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          className="my-4 py-2 font-semibold px-6 rounded-md border-2 border-blue-600"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
