import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonLink: React.FC<ButtonProps> = ({
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
        'font-sans font-medium text-yoghurt-500 underline transition duration-200 ease-in-out',
        'hover:text-yoghurt-300',
        disabled && 'cursor-not-allowed line-through opacity-60',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
