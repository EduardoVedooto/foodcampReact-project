import MenuRow from "./MenuRow";

export default function Main({sections, increment, decrement}) {
    
    return(
        <main>
            {sections.map((section, index) => (
                <MenuRow 
                    section={section}
                    increment={increment} 
                    decrement={decrement}
                    indexRow={index}
                    key={index}
                />
            ))}
        </main>
    );
}