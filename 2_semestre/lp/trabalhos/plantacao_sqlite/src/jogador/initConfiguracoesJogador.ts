import contaLogada from "../conta/contaLogada.ts";
import listarUsuarioItem from "../db/usuario_item/listarUsuarioItem.ts";

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

function initConfiguracoesJogador(jogador: ContaLogada) {
    contaLogada.usua_id = jogador.usua_id;
    contaLogada.usua_nome = jogador.usua_nome;
    console.log(listarUsuarioItem({usua_id: contaLogada.usua_id}));
}

export default initConfiguracoesJogador;
