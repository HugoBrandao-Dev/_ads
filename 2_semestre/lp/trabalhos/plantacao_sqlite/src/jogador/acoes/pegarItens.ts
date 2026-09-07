import contaLogada from "../../conta/contaLogada.ts";
import { estado } from "../../../ambientes/index.js";
import buscarLocalizacaoPeloNome from "../../db/localizacao/buscarLocalizacaoPeloNome.ts";
import buscarLocalizacaoItem from "../../db/localizacao_item/buscarLocalizacaoItem.ts";
import excluirLocalizacaoItem from "../../db/localizacao_item/excluirLocalizacaoItem.ts";

import type { RetornoLocalizacaoItem } from "../../db/localizacao_item/configLocalizacaoItem.ts";
import type { RetornoLocalizacao } from "../../db/localizacao/configLocalizacao.ts";
import criarUsuarioItem from "../../db/usuario_item/criarUsuarioItem.ts";
import alterarUsuarioItem from "../../db/usuario_item/alterarUsuarioItem.ts";
import alterarLocalizacaoItemQtd from "../../db/localizacao_item/alterarLocalizacaoItemQtd.ts";

function pegarItens(itensID: number[]): void {
    const localAtual: RetornoLocalizacao[] = buscarLocalizacaoPeloNome({loca_localizacao: estado.ambienteAtual!});
    const loca_id: number = localAtual[0]?.loca_id!;

    itensID.forEach(item_id => {
        const itemRegistro: RetornoLocalizacaoItem = buscarLocalizacaoItem({ loca_id, item_id })[0]!;
        if (itemRegistro.loit_quantidade === 1) {
            if (excluirLocalizacaoItem({loca_id, item_id})) {
                criarUsuarioItem({usua_id: contaLogada.usua_id, item_id });
            }
        } /*
        else {
            if (alterarLocalizacaoItemQtd({loca_id, item_id, valor: -1})) {
                alterarUsuarioItem({usua_id: contaLogada.usua_id, item_id}, 1);
            }
        }
            */
    });
}

export default pegarItens;
