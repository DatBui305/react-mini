function Button() {
    // const handleClick = () => console.log("ouch!");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    // return (
    //     <button onClick={() => handleClick2("Dat")} >Click me</button>
    // );
    /*--------------------------------------*/
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicking me ${count} times`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    // return (<button onClick={() => handleClick("Dat")}>Click me</button>);
    /*--------------------------------------*/
    let count = 0;
    const handleClick = (e) => e.target.textContent = "ouch";

    return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);

}
export default Button