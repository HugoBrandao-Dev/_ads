import inventorio from "../inventorio/inventorio.js";
import acoes from "./acoes.js";

// A função abaixo cria um objete contendo a(s) ação(ões) de cada um dos item que o usuário tem no seu inventório.
export default function buscarAcoes() {
    let acoesItem = {}

    // Percorre cada item do inventório.
    inventorio.forEach(i => {

        // Percorre cada ação do item.
        Object.keys(acoes[i]).forEach(a => {
            acoesItem[a] = acoes[i][a];
        })
    });
    return acoesItem;
}
