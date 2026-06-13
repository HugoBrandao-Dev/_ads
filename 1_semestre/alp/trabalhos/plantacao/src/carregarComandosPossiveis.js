import campos from "./campos/campos.js";
import comodos from "./comodos/comodos.js";
import acoesItemsInventorio from "./items/acoesItemsInventorio.js";
import locais from "./locais/locais.js";

// As ações possíveis são baseadas nos item que tem no inventório e/ou no local onde o personagem está.
export default function possiveisAcoes() {
    let acoesItems = Object.keys(acoesItemsInventorio());
    let acoesLocal = [];

    if (locais.espaco == "campo") {
        acoesLocal = campos[locais.local].conexoes;
    } else {
        acoesLocal = comodos[locais.local].conexoes;
    }

    return {acoesItems, acoesLocal, acoes: [...acoesItems, ...acoesLocal]};
}
