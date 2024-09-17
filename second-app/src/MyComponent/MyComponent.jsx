import React, { useState } from "react"
function MyComponent() {
    const [name, setName] = useState("Guess");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () => {
        setName("Dat");

    }
    const updateAge = () => {
        setAge(age + 1);

    }
    const updateIsEmployee = () => {
        setIsEmployee(true);
    }
    return (
        <div>
            <p>Name: {name} Age: {age} IsEmployee: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={updateName}>SetName</button>
            <button onClick={updateAge}>Increase Age</button>
            <button onClick={updateIsEmployee}>Update Is Employee</button>

        </div>
    );

}
export default MyComponent