import React from "react";

export default function Item(props){
    
    const [select, setSelect] = React.useState("");
    const [qnt, setQnt] = React.useState(1);


    function toggleSelect() {
        setSelect("selected");
        console.log("entrou aqui");
    }

    function decrement() {
        console.log(qnt);
        if(qnt === 0) {
            setSelect("");
            setQnt(1);
        } else {
            setQnt(qnt-1);
        }
    }

    return(
        <li className={select} onClick={toggleSelect}>
            <img src={props.imgLink} alt={props.imgDescription}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="footer">
                <div className="value">{props.value}</div>
                <div className={`qnt ${select === "" ? "hidden" : ""}`}>
                    <div className="minus" onClick={decrement}>-</div>
                    <div>{qnt}</div>
                    <div className="plus" onClick={() => setQnt(qnt + 1)}>+</div>
                </div>
            </div>
        </li>
    );
}