function List(props) {
    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    // fruits.sort();
    // const fruits = [{ id: 1, name: "apple", calories: 95 },
    // { id: 2, name: "orange", calories: 45 },
    // { id: 3, name: "banana", calories: 105 },
    // { id: 4, name: "coconut", calories: 159 },
    // { id: 5, name: "pineapple", calories: 37 }];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));//Alphatical
    // fruits.sort((a, b) => b.name.localeCompare(a.name));//Reverse Alphatical
    // fruits.sort((a, b) => a.calories - b.calories);//Numeric
    // fruits.sort((a, b) => b.calories - a.calories);//Reverse Numeric
    // const listItems = fruits.map(fruit =>
    //     <li key={fruit.id}>
    //         {fruit.name}: &nbsp;
    //         <b>{fruit.calories}</b></li>);

    // return (< ol > {listItems}</ol >);


    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)
    // const listItems = highCalFruits.map(highCalFruit =>
    //     <li key={highCalFruit.id}>
    //         {highCalFruit.name}: &nbsp;
    //         <b>{highCalFruit.calories}</b></li>);

    // return (< ol > {listItems}</ol >);
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b></li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );

}

export default List
/*
.list-category {
    font-size: 2.5em;
    font-weight: bold;
    color: hsl(0, 0%, 20%);
    margin-bottom: 10px;
    text-align: center;
    border: 3px solid;
    border-radius: 5px;
    background-color: hsl(185, 100%, 50%);
}

.list-items li {
    font-size: 2em;
    list-style: none;
    color: hsl(0, 0%, 25%);
    text-align: center;
    margin: 0;
}

.list-items li:hover {
    color: hsl(0, 0%, 45%);
    cursor: pointer;
}
*/