import React, { useState, useEffect } from "react";
function MyComponent() {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count])
    // function addCount() {
    //     setCount(count => count + 1);
    // }
    // function subtractCount() {
    //     setCount(count => count - 1);
    // }
    // return (
    //     <div>
    //         <p> Count: {count}</p>
    //         <button onClick={addCount}>Add</button>
    //         <button onClick={subtractCount}>Subtract</button>

    //     </div>
    // );

    /* ------------------------ */
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);;
        console.log("hello");

    }, [])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p>Window height: {height}px</p>
        <p>Window width: {width}px</p>

    </>)

}
export default MyComponent;