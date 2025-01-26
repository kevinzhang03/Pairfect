import React from 'react';
import QuestionOption from './QuestionOption';
import QuestionInput from './QuestionInput';

function Question() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <h1 className="font-regular font-medium italic text-cream">
          Tell us a bit about yourself.
        </h1>
        <p className="mt-2 font-medium text-cream">Please answer honestly.</p>
      </div>
      <div className="flex flex-col space-y-3">
        {/* <QuestionInput /> */}
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
        <QuestionOption />
      </div>
    </div>
  );
}

export default Question;
