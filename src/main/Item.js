import React from "react";

export default function Item(props){
    
    const {section, imgLink, imgDescription, title, description, value} = props;

    const [select, setSelect] = React.useState("");
    const [qnt, setQnt] = React.useState(0);

    function selectItem() {
        if(select === "") increment();
        setSelect("selected");
    }

    function decrement() {
        if(qnt === 1) {
            setSelect("");
        }
        else setQnt(qnt - 1);
        sessionStorage.setItem(section, Number(sessionStorage.getItem(section)) - 1);
        console.log(sessionStorage);
    }

    function increment() {
        setQnt(qnt + 1);
        sessionStorage.setItem(section, Number(sessionStorage.getItem(section)) + 1);
        console.log(sessionStorage);
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