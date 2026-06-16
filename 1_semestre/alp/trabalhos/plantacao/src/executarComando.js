import acoes from "./items/acoes.js";
import carregarComandosPossiveis from "./carregarComandosPossiveis.js";
import mudarPosicao from "./locais/mudarPosicao.js";

export default function executar(cmd) {
    let comandos = carregarComandosPossiveis();

    // O código abaixo verifica se o comando é para mudança de local.
    if (comandos.acoesLocal.includes(cmd)) {
        mudarPosicao(cmd);

    // O código abaixo verifica se o comando é para uso de um item.
    } else {
        console.log("Comando para ITEM");
    }
}
