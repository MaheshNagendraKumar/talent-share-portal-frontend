import React, { ReactNode, FormEvent, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

interface FormChildProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

interface ReusableFormProps {
  children: ReactNode;
  onSubmit: (formData: any) => void;
  formData: any; 
  setFormData: React.Dispatch<React.SetStateAction<any>>; 
}

function ReusableForm({ children, onSubmit, formData, setFormData }: ReusableFormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("formdata", formData);
    console.log(event.target.name, event.target.value);
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const cloneChild = (child: ReactNode): ReactNode => {
    if (React.isValidElement(child)) {
      // console.log("clonechild true>>>",child);
      // console.log("child >>>");
      
      const childProps: FormChildProps = {
        
        onChange: handleChange,
        value: formData[child.props.name] || '',
      };
      // console.log("childProps after setting>>>",childProps);
      return React.cloneElement(child, childProps);
    }
    return child;
  };

  return (
    <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      {React.Children.map(children, cloneChild)}
    </Form>
  );
}

export default ReusableForm;