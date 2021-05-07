import React from "react";

export default function Footer() {

    const [active, setActive] = React.useState("hidden");

    function activateButton() {
        if(sessionStorage.food !== "0" && sessionStorage.drink !== "0" && sessionStorage.dessert !== "0"){
            setActive("");
        }
    }

    activateButton();

    return(
        <footer>
            <button className={active === "hidden" ? "" : "hidden"}>
                Selecione os 3 itens <br/>
                para fechar o pedido
            </button>
            <button className={`finalization ${active}`}>
                Fechar pedido
            </button>
        </footer>
    );
}