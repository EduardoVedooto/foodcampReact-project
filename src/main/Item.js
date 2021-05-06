export default function Item(props){
    return(
        <li>
            <img src={props.imgLink} alt={props.imgDescription}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="value">{props.value}</div>
        </li>
    );
}