import React from "react";

export default function Item(props){
    
    const [select, setSelect] = React.useState("");
    const [qnt, setQnt] = React.useState(1);


    function toggleSelect() {
        setSelect("selected");
    }

    function decrement() {
        if(qnt === 1) setSelect("");
        else setQnt(qnt-1);
    }

    return(
        <li className={select}>
            <div className="content" onClick={toggleSelect}>
                <img src={props.imgLink} alt={props.imgDescription}/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="value">{props.value}</div>
            </div>
            <div className={`qnt ${select === "" || qnt === 0 ? "hidden" : ""}`}>
                <div className="minus" onClick={decrement}>-</div>
                <div>{qnt}</div>
                <div className="plus" onClick={() => setQnt(qnt + 1)}>+</div>
            </div>
        </li>
    );
}