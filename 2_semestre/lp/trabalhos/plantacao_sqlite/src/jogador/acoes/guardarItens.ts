import contaLogada from "../../conta/contaLogada.ts";
import buscarLocalizacaoPeloNome from "../../db/localizacao/buscarLocalizacaoPeloNome.ts";
import criarLocalizacaoItem from "../../db/localizacao_item/criarLocalizacaoItem.ts";
import buscarUsuarioItem from "../../db/usuario_item/buscarUsuarioItem.ts";
import excluirUsuarioItem from "../../db/usuario_item/excluirUsuarioItem.ts";
import { estado } from "../../../ambientes/index.js";

import type { RetornoUsuarioItem } from "../../db/usuario_item/configUsuarioItem.ts";
import type { RetornoLocalizacao } from "../../db/localizacao/configLocalizacao.ts";

function guardarItens(itensID: number[]): void {
    const localAtual: RetornoLocalizacao[] = buscarLocalizacaoPeloNome({loca_localizacao: estado.ambienteAtual!});
    const loca_id: number = localAtual[0]?.loca_id!;
    const usua_id: number = contaLogada.usua_id

    itensID.forEach(item_id => {
        const registroUsuarioItem: RetornoUsuarioItem = buscarUsuarioItem({usua_id, item_id})[0]!;
        if (registroUsuarioItem.usit_quantidade === 1) {
            if (excluirUsuarioItem({usua_id, item_id})) {
                criarLocalizacaoItem({usua_id, loca_id, item_id });
            }
        }
    });
}

export default guardarItens;
