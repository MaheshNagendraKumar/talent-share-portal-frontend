import React, { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type, value, onChange }) => {
  return (
    <Form.Group controlId={name} className='p-auto m-auto w-50'>
      <Form.Label>{label}</Form.Label>
      <Form.Control className='mb-3'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
    </Form.Group>
  );
};

export default FormInput;
