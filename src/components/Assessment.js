import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import QuestionNavigation from "./QuestionNavigation";
import { questions } from "../utils/questionData";

const Assessment = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="flex min-h-[70vh] my-2">
      {questions.map((question, index) => (
        <Question
          key={index}
          questionNo={question.questionNo}
          questionLevel={question.questionLevel}
          questionText={question.questionText}
          options={question.options}
          isActive={index === activeQuestionIndex}
          onNext={handleNextQuestion}
          onPrev={handlePrevQuestion}
        />
      ))}
      <div>
        <Timer />
        <QuestionNavigation
          totalQuestions={questions.length}
          setActiveQuestionIndex={setActiveQuestionIndex}
        />
        <div className="flex justify-center mx-5  bg-[#94a3b8]">
          <h1 className="text-xl m-2 mx-2 p-2  font-semibold">Submit</h1>
        </div>
      </div>
    </div>
  );
};

export default Assessment;