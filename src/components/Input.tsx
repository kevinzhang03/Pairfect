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
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  icon,
  value,
  onChange,
  className = '',
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
        'border-brown focus-within:border-pear-500 relative flex items-center border-b-2 transition-colors ease-in-out',
        className,
      )}
    >
      {IconComponent && (
        <div className="absolute left-0 flex h-full w-6 items-center justify-center">
          <IconComponent className="text-brown h-5 w-5" />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`placeholder-brown/60 w-full bg-transparent px-4 py-1 pl-${icon ? '8' : '4'} font-sans font-medium italic focus:outline-none`}
        style={{ paddingLeft: icon ? '2rem' : '1rem' }}
      />
    </div>
  );
};

export default Input;
