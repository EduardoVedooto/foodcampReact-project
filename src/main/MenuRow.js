import Item from "./Item";

export default function MenuRow(props) {
    
    const {sectionTitle, section, items} = props;

    return(
        <>
            <h2>{sectionTitle}</h2>
            <ul>
                {items.map(item => (
                    <Item
                        section={section}
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