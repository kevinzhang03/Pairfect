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
        'text-yoghurt-500 font-sans font-medium underline transition duration-200 ease-in-out',
        'hover:text-yoghurt-300',
        disabled && 'cursor-not-allowed line-through opacity-60',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
