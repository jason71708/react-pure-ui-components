import React from 'react';

interface ButtonProps {
  onClick?: (...parmeters: any[]) => {};
  children?: React.ReactNode;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="px-2 py-1" {...props}>
      {props.children || ''}
    </button>
  );
}

export default Button;