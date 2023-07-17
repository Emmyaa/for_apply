import React, { useState } from 'react';

const Prob1 = () => {
    const [cash, setCash] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [change, setChange] = useState([]);

    const calculateChange = () => {
        const cashAmount = parseFloat(cash);
        const priceAmount = parseFloat(productPrice);

        const difference = cashAmount - priceAmount;
        let remainingChange = difference;

        const denominations = [
            { value: 1000, label: 'ใบ 1,000 บาท' },
            { value: 500, label: 'ใบ 500 บาท' },
            { value: 100, label: 'ใบ 100 บาท' },
            { value: 50, label: 'ใบ 50 บาท' },
            { value: 20, label: 'ใบ 20 บาท' },
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
            <form onSubmit={handleSubmit}>
                <h3>โจทย์ข้อที่ 1</h3>
                <label>
                    จำนวนเงินที่รับ:
                    <input type="text" value={cash} onChange={handleCashChange} />
                    บาท
                </label>
                <br />
                <label>
                    ราคาสินค้า:
                    <input type="text" value={productPrice} onChange={handleProductPriceChange} />
                    บาท
                </label>
                <br />
                <button type="submit">คำนวณเงินทอน</button>
            </form>
            <ul>
                {change.map((denomination) => (
                    <li key={denomination.value}>
                        {denomination.label} x {denomination.count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Prob1;