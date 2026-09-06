import type { RetornoContaLogada } from "../conta/configContaLogada.ts";
import contaLogada from "../conta/contaLogada.ts";

function initConfiguracoesJogador(jogador: RetornoContaLogada) {
    contaLogada.usua_id = jogador.usua_id;
    contaLogada.usua_nome = jogador.usua_nome;

    // O jogador começa na casa.
    contaLogada.localAtual = "Casa";
}

export default initConfiguracoesJogador;
