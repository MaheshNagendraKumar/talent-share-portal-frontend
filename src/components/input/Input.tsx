import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { ReactNode } from 'react';

interface InputProps {
    children?: ReactNode
}

function Input({ children }: InputProps) {
    return (
        <>
            <InputGroup className="m-auto w-25">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup> 
        </>
    )
}

export default Input