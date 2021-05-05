export default function MenuRow(props) {
    return(
        <>
            <h2>{props.title}</h2>
            <ul>
                <li>
                    <img href={props.imgLink} alt={props.imgDescription}/>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <span>{props.value}</span>
                </li>
            </ul>
        </>
    );
}