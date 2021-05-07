import Item from "./Item";
import Item2 from "./Item2";

export default function MenuRow(props) {
    
    return(
        <>
            <h2>{props.sectionTitle}</h2>
            <ul>
                {props.items.map(item => (
                    <Item2 
                        imgLink={item.imgLink}
                        imgDescription={item.imgDescription}
                        title={item.title}
                        description={item.description}
                        value={item.value}
                    />
                ))}
            </ul>
        </>
    );
}