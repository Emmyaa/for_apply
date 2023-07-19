import React, { useState } from 'react';
import Navigation from '../../components/Navigation';

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
        <div className='calculate-form'>
            <Navigation />
            <form onSubmit={handleSubmit}>
                <h3>โจทย์ข้อที่ 1</h3>
                <label>
                    เงินสด
                    <input type="text" value={cash} onChange={handleCashChange} />
                </label>
                <br />
                <label>
                    ราคาสินค้า
                    <input type="text" value={productPrice} onChange={handleProductPriceChange} />
                </label>
                <br />
                <button type="submit">submit</button>
            </form>
            {change.length > 0 && (
                <div>
                    <p>เงินสด = {cash} บาท</p>
                    <p>ราคาสินค้า = {productPrice} บาท</p>
                    <p>เงินทอน = {cash - productPrice} บาท</p>
                    <p>**------------------------------------**</p>
                    <ul>
                        {change.map((denomination) => (
                            <div key={denomination.value}>
                                มีจำนวน{denomination.label} = {denomination.count} {denomination.label.includes('ธนบัตร') ? 'ใบ' : 'เหรียญ'}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Prob1;