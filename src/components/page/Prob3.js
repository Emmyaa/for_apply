import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Prob3 = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const inputChange = (e) => {
        setInput(e.target.value);
    };

    const PyramidNumbers = () => {
        const rows = [];
        for (let i = 1; i <= input; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }
            rows.push(<div key={i}>{row}</div>);
        }

        for (let i = input - 1; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }
            rows.push(<div key={input + i}>{row}</div>);
        }
        setResult(rows)
        return <div className="pyramid">{rows}</div>;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        PyramidNumbers();

    };

    return (
        <div>
            <Navigation />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-5 ms-5 me-5" controlId="formBasicEmail">
                    <h3>โจทย์ข้อที่ 3</h3>
                </Form.Group>
                <Form.Group className="mt-3 ms-5 me-5" controlId="formBasicEmail">
                    <Form.Label>INPUT Value :</Form.Label>
                    <Form.Control type="text" placeholder="กรอกจำนวนเงินที่มี" value={input} onChange={inputChange} />
                </Form.Group>
                <Button className="mt-3 ms-5" variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
            {result.length > 0 && (
                <div>
                    <Card body className="mt-5 ms-5 me-5">
                        <p>{result}</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Prob3;