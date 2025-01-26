import clsx from 'clsx';
import React from 'react';

interface QuestionInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
}

function QuestionInput({
  placeholder = '',
  value = '',
  name,
  onChange,
  className = '',
}: QuestionInputProps) {
  return (
    <div className="focus-within:bg-cream-200 rounded-xl bg-white px-6 py-3 text-left transition">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={
          (clsx(
            'focus:bg-cream-200 w-full text-lg font-medium italic outline-none transition placeholder:italic',
          ),
          className)
        }
      />
    </div>
  );
}

export default QuestionInput;
