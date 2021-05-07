export default function Item(props){

    const {
        imgLink,
        imgDescription,
        title,
        description,
        value,
        quantity,
        isSelected,
        increment,
        decrement,
        index,
        indexRow,
    } = props;

    function selectItem() {
        if(!isSelected) increment(indexRow, index);
    }

    return(
        <li className={isSelected ? "selected" : ""}>
            <div className="content" onClick={selectItem}>
                <img src={imgLink} alt={imgDescription}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="value">{`R$ ${(value.toFixed(2))}`}</div>
            </div>
            <div className={`qnt ${isSelected ? "" : "hidden"}`}>
                <div className="minus" onClick={() => decrement(indexRow, index)}>-</div>
                <div>{quantity}</div>
                <div className="plus" onClick={() => increment(indexRow, index)}>+</div>
            </div>
        </li>
    );
}