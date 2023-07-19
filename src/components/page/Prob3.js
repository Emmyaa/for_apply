import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
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

    return (
        <div>
            <Navigation />
            <h3>โจทย์ข้อที่ 3</h3>
            <div className="form-control">
                <label>INPUT A :</label>
                <input type="text" value={input} onChange={inputChange} />
            </div>
            <button type="submit" onClick={PyramidNumbers}>Submit</button>
            {result.length > 0 && (
                <div>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Prob3;