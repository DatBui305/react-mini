function Food() {

    const food1 = "Burger";
    const food2 = "Pizza";
    return (
        <ul>
            <li>Rice</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;