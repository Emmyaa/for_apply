import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Prob2 = () => {
    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [result, setResult] = useState('');

    const inputChange = (e) => {
        setInputA(e.target.value);
    };

    const inputBChange = (e) => {
        setInputB(e.target.value);
    };

    const reversInputB = inputB.split('').reverse().join('');


    const mergeStrings = (str1, str2) => {
        const merged = [];
        const maxLength = Math.max(str1.length, str2.length);

        for (let i = 0; i < maxLength; i++) {
            const char1 = str1[i] || '';
            const char2 = str2[i] || '';
            merged.push(char1 + char2);
        }

        return merged.join(',');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const merged = mergeStrings(inputA, reversInputB);
        setResult(merged);
    };


    return (
        <div>
            <Navigation />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-5 ms-5 me-5" controlId="formBasicEmail">
                    <h3>โจทย์ข้อที่ 2</h3>
                </Form.Group>
                <Form.Group className="mt-3 ms-5 me-5" controlId="formBasicEmail">
                    <Form.Label>INPUT A :</Form.Label>
                    <Form.Control type="text" value={inputA} onChange={inputChange} />
                </Form.Group>
                <Form.Group className="mt-3 ms-5 me-5" controlId="formBasicPassword">
                    <Form.Label>INPUT B :</Form.Label>
                    <Form.Control type="text" value={inputB} onChange={inputBChange} />
                </Form.Group>
                <Button className="mt-3 ms-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {result.length > 0 && (
                <div>
                    <Card body className="mt-5 ms-5 me-5">
                        <p>INPUT A : {inputA}</p>
                        <p>INPUT B : {inputB}</p>
                        <p>Result: {result}</p>
                    </Card>
                </div>
            )}
        </div >
    );
};

export default Prob2;