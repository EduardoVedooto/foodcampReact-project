import React from "react";

export default function Footer({isActive}) {
    
    return(
        <footer>
            <button className={isActive ? "hidden" : ""}>
                Selecione os 3 itens <br/>
                para fechar o pedido
            </button>
            <button className={`finalization ${isActive ? "" : "hidden"}`}>
                Fechar pedido
            </button>
        </footer>
    );
}
