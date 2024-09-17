import React, { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrease}>Decrease</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increase}>Increase</button>

        </div>
    );
}
export default Counter
/*
.counter-container {
    text-align: center;
    font-family: Arial, sans-serif;
}

.count-display {
    font-size: 10em;
    margin-top: 0;
    margin-bottom: 50px;

}

.counter-button {
    width: 150px;
    height: 50px;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0px 5px;
    background-color: hsl(197, 100%, 58%);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.counter-button:hover {
    background-color: hsl(197, 100%, 48%);
}
*/