import MenuRow from "./MenuRow";

const sections = [
    {
        sectionTitle: "Primeiro, seu prato",
        menu: [
            {
                imgLink: "assets/images/Pizza.jpg",
                imgDescription: "Imagem do prato",
                title: "Pizza",
                description: "Pizza portuguesa",
                value: "R$ 39,90"
            },
            {
                imgLink: "assets/images/lasanha.jpg",
                imgDescription: "Imagem do prato",
                title: "Lasanha",
                description: "Lasanha bolonhesa",
                value: "R$ 29,90"
            },
            {
                imgLink: "assets/images/hamburguer.jpg",
                imgDescription: "Imagem do prato",
                title: "Hamburguer",
                description: "Hamburguer tradicional com porção de fritas",
                value: "R$ 24,85"
            }
        ]
    },
    {
        sectionTitle: "Agora sua bebida",
        menu: [
            
            {
                imgLink: "assets/images/latas.jpg",
                imgDescription: "Imagem da bebida",
                title: "Refrigerante lata",
                description: "Lata 350ml",
                value: "R$ 4,90"
            },
            {
                imgLink: "assets/images/sucos.jpg",
                imgDescription: "Imagem da bebida",
                title: "Suco Natural",
                description: "Suco natural de vários sabores",
                value: "R$ 7,45"
            },
            {
                imgLink: "assets/images/agua.jpg",
                imgDescription: "Imagem da bebida",
                title: "Água",
                description: "Água mineral (com e sem gás)",
                value: "R$ 5,50"
            }
        ]
    },
    {
        sectionTitle: "Por fim, sua sobremesa",
        menu: [
            {
                imgLink: "assets/images/sorvete.jpg",
                imgDescription: "Imagem da sobremesa",
                title: "Sorvete",
                description: "Sorvete de vários sabores",
                value: "R$ 8,30"
            },
            {
                imgLink: "assets/images/milkshake.jpg",
                imgDescription: "Imagem da sobremesa",
                title: "Milkshake",
                description: "Milkshakes variados",
                value: "R$ 10,90"
            },
            {
                imgLink: "assets/images/tortalimao.jpg",
                imgDescription: "Imagem da sobremesa",
                title: "Torta de limão",
                description: "Fatia de 300g de torta de limão",
                value: "R$ 11,90"
            }
        ]
    }
];

export default function Main() {
    return(
        <main>
            {sections.map(section => (
                <MenuRow 
                    sectionTitle={section.sectionTitle}
                    items={section.menu}
                />
            ))}
        </main>
    );
}