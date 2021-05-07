import Item from "./Item";

export default function MenuRow({section, increment, decrement, indexRow}) {

    const {sectionTitle, sectionID, menu} = section;

    console.log(menu);

    return(
        <>
            <h2>{sectionTitle}</h2>
            <ul>
                {menu.map((item, index) => (
                    <Item
                        section={sectionID}
                        imgLink={item.imgLink}
                        imgDescription={item.imgDescription}
                        title={item.title}
                        description={item.description}
                        value={item.value}
                        quantity={item.qnt}
                        isSelected={item.isSelected}
                        increment={increment}
                        decrement={decrement}
                        index={index}
                        indexRow={indexRow}
                        key={index}
                    />
                ))}
            </ul>
        </>
    );
}