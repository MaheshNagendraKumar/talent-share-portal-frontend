import React from 'react';
import BButton from 'react-bootstrap/Button';

interface FormButtonProps {
  children?: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

function Button({ children, type }: FormButtonProps) {
  return (
    <BButton type={type} className='m-auto '>
      {children}
    </BButton>
  );
}

export default Button;
