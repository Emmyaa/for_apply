import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Prob1 = () => {
    const [cash, setCash] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [change, setChange] = useState([]);

    const calculateChange = () => {
        const cashAmount = parseFloat(cash);
        const priceAmount = parseFloat(productPrice);
        let remainingChange = cashAmount - priceAmount;

        const denominations = [
            { value: 1000, label: 'ธนบัตร 1,000 บาท' },
            { value: 500, label: 'ธนบัตร 500 บาท' },
            { value: 100, label: 'ธนบัตร 100 บาท' },
            { value: 50, label: 'ธนบัตร 50 บาท' },
            { value: 20, label: 'ธนบัตร 20 บาท' },
            { value: 10, label: 'เหรียญ 10 บาท' },
            { value: 5, label: 'เหรียญ 5 บาท' },
            { value: 2, label: 'เหรียญ 2 บาท' },
            { value: 1, label: 'เหรียญ 1 บาท' }
        ];

        const changeDenominations = denominations.reduce((result, denomination) => {
            const count = Math.floor(remainingChange / denomination.value);
            if (count > 0) {
                remainingChange %= denomination.value;
                result.push({ ...denomination, count });
            }
            return result;
        }, []);

        setChange(changeDenominations);
    };

    const handleCashChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setCash(value);
        }
    };

    const handleProductPriceChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setProductPrice(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateChange();
    };

    return (
        <div>
            <Navigation />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-5 ms-5 me-5" controlId="formBasicEmail">
                    <h3>โจทย์ข้อที่ 1</h3>
                </Form.Group>
                <Form.Group className="mt-3 ms-5 me-5" controlId="formBasicEmail">
                    <Form.Label>เงินสด</Form.Label>
                    <Form.Control type="text" placeholder="กรอกจำนวนเงินที่มี" value={cash} onChange={handleCashChange} />
                </Form.Group>
                <Form.Group className="mt-3 ms-5 me-5" controlId="formBasicPassword">
                    <Form.Label>ราคาสินค้า</Form.Label>
                    <Form.Control type="text" placeholder="กรอกราคาสินค้า" value={productPrice} onChange={handleProductPriceChange} />
                </Form.Group>
                <Button className="mt-3 ms-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {change.length > 0 && (
                <Card body className="mt-5 ms-5 me-5">
                    <div className='result-style'>
                        <p>เงินสด = {cash} บาท</p>
                        <p>ราคาสินค้า = {productPrice} บาท</p>
                        <p>เงินทอน = {cash - productPrice} บาท</p>
                        <ul>
                            {change.map((denomination) => (
                                <div key={denomination.value}>
                                    มีจำนวน{denomination.label} = {denomination.count} {denomination.label.includes('ธนบัตร') ? 'ใบ' : 'เหรียญ'}
                                </div>
                            ))}
                        </ul>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Prob1;