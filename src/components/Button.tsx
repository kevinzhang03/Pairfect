import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'min-w-32 rounded-full bg-pear-500 px-4 py-2 font-sans font-medium text-cream transition duration-200 ease-in-out',
        'hover:bg-pear-600 active:scale-95',
        disabled && 'cursor-not-allowed opacity-60',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
