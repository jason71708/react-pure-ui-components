import React from 'react';

interface ButtonProps {
  onClick?: (...parmeters: any[]) => {};
  children?: React.ReactNode;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="px-6 py-2 bg-primary rounded text-white" {...props}>
      {props.children || ''}
    </button>
  );
}

export default Button;