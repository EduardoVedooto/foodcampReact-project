import React from "react";

export default function Item(props){
    
    const {section, imgLink, imgDescription, title, description, value} = props;

    const [food, setFood] = React.useState(0);
    const [drink, setDrink] = React.useState(0);
    const [dessert, setDessert] = React.useState(0);

    const [select, setSelect] = React.useState("");
    const [qnt, setQnt] = React.useState(1);

    function selectItem() {
        if(section === "food" && select === ""){
            setFood(food + 1);
            console.log("Número de pratos: " + (food + 1));
        } else if(section === "drink" && select === ""){
            setDrink(drink + 1);
            console.log("Número de bebidas: " + (drink + 1));
        } else if(section === "dessert" && select === ""){
            setDessert(dessert + 1);
            console.log("Número de sobremesas: " + (dessert+1));
        }
        setSelect("selected");
    }

    function decrement() {
        if(qnt === 1) setSelect("");
        else setQnt(qnt - 1);
        set
    }

    function increment() {
        setQnt(qnt + 1);
        if(section === "food") {
            setFood(food + 1);
            console.log("Número de pratos " + (food+1));
        } else if(section === "drink"){
            setDrink(drink + 1);
            console.log("Número de bebidas " + (drink+1));
        } else if(section === "dessert"){
            setDessert(dessert + 1);
            console.log("Número de sobremesas " + (dessert+1));
        }
    }

    return(
        <li className={select}>
            <div className="content" onClick={selectItem}>
                <img src={imgLink} alt={imgDescription}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="value">{value}</div>
            </div>
            <div className={`qnt ${select === "" || qnt === 0 ? "hidden" : ""}`}>
                <div className="minus" onClick={decrement}>-</div>
                <div>{qnt}</div>
                <div className="plus" onClick={increment}>+</div>
            </div>
        </li>
    );
}