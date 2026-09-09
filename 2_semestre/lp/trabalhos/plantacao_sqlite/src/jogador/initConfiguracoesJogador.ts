import contaLogada from "../conta/contaLogada.ts";
import type { RetornoFazerLogin } from "../db/usuario/TiposUsuario.ts";

function initConfiguracoesJogador(jogador: RetornoFazerLogin) {
    contaLogada.usua_id = jogador.usua_id;
    contaLogada.usua_nome = jogador.usua_nome;
}

export default initConfiguracoesJogador;
