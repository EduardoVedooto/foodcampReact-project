import Item from "./Item";

export default function MenuRow(props) {
    return(
        <>
            <h2>{props.sectionTitle}</h2>
            <ul>
                {props.items.map(item => (
                    <Item 
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