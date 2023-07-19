import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
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

    const submit = () => {
        const merged = mergeStrings(inputA, reversInputB);
        setResult(merged);
    };

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


    return (
        <div>
            <Navigation />
            <h3>โจทย์ข้อที่ 2</h3>
            <div className="form-control">
                <label>INPUT A :</label>
                <input type="text" value={inputA} onChange={inputChange} />
            </div>
            <div className="form-control">
                <label>INPUT B :</label>
                <input type="text" value={inputB} onChange={inputBChange} />
            </div>
            <button type="submit" onClick={submit}>
                Submit
            </button>
            {result.length > 0 && (
                <div>
                    <p>INPUT A : {inputA}</p>
                    <p>INPUT B : {inputB}</p>
                    <p>**---------------------------------------**</p>
                    <p>Result: {result}</p>
                </div>
            )}

        </div>
    );
};

export default Prob2;

// useEffect(() => {
//     reverseInputB(inputA, inputB)
// }, [inputA, inputB])