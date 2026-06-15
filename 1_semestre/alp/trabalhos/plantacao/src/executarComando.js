import acoes from "./items/acoes.js";
import carregarComandosPossiveis from "./carregarComandosPossiveis.js";

let comandos = carregarComandosPossiveis();

export default function executar(cmd) {
    if (comandos.acoesLocal.includes(cmd)) {
        console.log("Comando para LOCAL");
    } else {
        console.log("Comando para ITEM");
    }
}
