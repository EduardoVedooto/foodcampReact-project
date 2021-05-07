import React from "react";
import Header from "./Header";
import Main from "./main/Main";
import Footer from "./Footer";



export default function App() {
    
    const [sections, setSections] = React.useState([
        {
            sectionTitle: "Primeiro, seu prato",
            sectionID: "food",
            menu: [
                {
                    imgLink: "assets/images/Pizza.jpg",
                    imgDescription: "Imagem do prato",
                    title: "Pizza",
                    description: "Pizza portuguesa",
                    value: 39.90,
                    qnt: 0,
                    isSelected: false
                },
                {
                    imgLink: "assets/images/hamburguer.jpg",
                    imgDescription: "Imagem do prato",
                    title: "Hamburguer",
                    description: "Hamburguer tradicional com porção de fritas",
                    value: 24.85,
                    qnt: 0,
                    isSelected: false
                },
                {
                    imgLink: "assets/images/lasanha.jpg",
                    imgDescription: "Imagem do prato",
                    title: "Lasanha",
                    description: "Lasanha bolonhesa",
                    value: 29.90,
                    qnt: 0,
                    isSelected: false
                }
            ]
        },
        {
            sectionTitle: "Agora sua bebida",
            sectionID: "drink",
            menu: [
                {
                    imgLink: "assets/images/latas.jpg",
                    imgDescription: "Imagem da bebida",
                    title: "Refrigerante lata",
                    description: "Lata 350ml",
                    value: 4.90,
                    qnt: 0,
                    isSelected: false
                },
                {
                    imgLink: "assets/images/sucos.jpg",
                    imgDescription: "Imagem da bebida",
                    title: "Suco Natural",
                    description: "Suco natural de vários sabores",
                    value: 7.45,
                    qnt: 0,
                    isSelected: false
                },
                {
                    imgLink: "assets/images/agua.jpg",
                    imgDescription: "Imagem da bebida",
                    title: "Água",
                    description: "Água mineral (com e sem gás)",
                    value: 5.50,
                    qnt: 0,
                    isSelected: false
                }
            ]
        },
        {
            sectionTitle: "Por fim, sua sobremesa",
            sectionID: "dessert",
            menu: [
                {
                    imgLink: "assets/images/sorvete.jpg",
                    imgDescription: "Imagem da sobremesa",
                    title: "Sorvete",
                    description: "Sorvete de vários sabores",
                    value: 8.30,
                    qnt: 0,
                    isSelected: false 
                },
                {
                    imgLink: "assets/images/milkshake.jpg",
                    imgDescription: "Imagem da sobremesa",
                    title: "Milkshake",
                    description: "Milkshakes variados",
                    value: 10.90,
                    qnt: 0,
                    isSelected: false
                },
                {
                    imgLink: "assets/images/tortalimao.jpg",
                    imgDescription: "Imagem da sobremesa",
                    title: "Torta de limão",
                    description: "Fatia de 300g de torta de limão",
                    value: 11.90,
                    qnt: 0,
                    isSelected: false
                }
            ]
        }
    ]);
    
    console.log(sections[1].menu[0].qnt);

    function increment(indexRow, index) {
        sections[indexRow].menu[index].qnt++;
        sections[indexRow].menu[index].isSelected = true;
        setSections([...sections]);
    }

    function decrement(indexRow, index) {
        if(sections[indexRow].menu[index].qnt - 1 === 0) {
            sections[indexRow].menu[index].qnt--;
            sections[indexRow].menu[index].isSelected = false;
        }
        else if(sections[indexRow].menu[index].qnt === 0) {
            return;
        } else {
            sections[indexRow].menu[index].qnt--;
        }
        setSections([...sections]);
    }

    return(
        <>
            <Header />
            <Main sections={sections} increment={increment} decrement={decrement}/>
            <Footer />
        </>
    );
}