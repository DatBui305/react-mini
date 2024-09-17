import React, { useEffect, useRef, useState } from "react";
function MyComponent() {

    // let [number, setNumber] = useState(0);
    const ref = useRef(0);
    useEffect(() => {
        console.log("Component render");
    })
    function handleClick() {
        // ref.current = ref.current + 1;
        ref.current++;
        console.log(ref.current);
    }
    return (
        <button onClick={handleClick}>CLick me</button>
    );
}
export default MyComponent;