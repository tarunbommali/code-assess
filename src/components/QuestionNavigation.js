import React from 'react';

const QuestionNavigation = ({ totalQuestions, setActiveQuestionIndex }) => {
  const items = Array.from({ length: totalQuestions }, (_, index) => index + 1);

  const handleItemClick = (index) => {
    setActiveQuestionIndex(index);
  };

  return (
    <div className='flex w-[100%] px-5'>
      <ul className='flex flex-wrap'>
        {items.map((item, index) => (
          <li
            key={item}
            className='m-2 mx-2 p-2 bg-[#1f1f1f] text-white w-[48px] cursor-pointer'
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionNavigation;
