import contaLogada from "../conta/contaLogada.ts";

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

function initConfiguracoesJogador(jogador: ContaLogada) {
    contaLogada.usua_id = jogador.usua_id;
    contaLogada.usua_nome = jogador.usua_nome;
}

export default initConfiguracoesJogador;
