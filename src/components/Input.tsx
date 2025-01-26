import React from 'react';
import { Mail, LockKeyhole } from 'lucide-react';
import clsx from 'clsx';

interface InputProps {
  type?: 'text' | 'password';
  placeholder?: string;
  icon?: 'email' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  icon,
  value = '',
  onChange,
  className = '',
  name,
}) => {
  let IconComponent = null;
  switch (icon) {
    case 'email':
      IconComponent = Mail;
      break;
    case 'password':
      IconComponent = LockKeyhole;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div
      className={clsx(
        'relative flex items-center border-b-2 border-brown transition-colors ease-in-out focus-within:border-pear-500',
        className,
      )}
    >
      {IconComponent && (
        <div className="absolute left-0 flex h-full w-6 items-center justify-center">
          <IconComponent className="h-5 w-5 text-brown" />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={clsx(
          'w-full bg-transparent px-4 py-1 font-sans font-medium placeholder-brown/60 placeholder:italic focus:outline-none',
          { 'pl-8': icon, 'pl-4': !icon },
        )}
        style={{ paddingLeft: icon ? '2rem' : '1rem' }}
      />
    </div>
  );
};

export default Input;
