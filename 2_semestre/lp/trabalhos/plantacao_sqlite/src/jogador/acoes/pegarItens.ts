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
import buscarUsuarioItem from "../../db/usuario_item/buscarUsuarioItem.ts";

function pegarItens(itensID: number[]): void {
    const localAtual: RetornoLocalizacao[] = buscarLocalizacaoPeloNome({loca_localizacao: estado.ambienteAtual!});
    const loca_id: number = localAtual[0]?.loca_id!;
    const usua_id: number = contaLogada.usua_id;

    itensID.forEach(item_id => {
        const itemRegistro: RetornoLocalizacaoItem = buscarLocalizacaoItem({usua_id, loca_id, item_id })[0]!;

        // Verifica se só há UM item no db
        if (itemRegistro.loit_qt_item === 1) {

            // Excluir o item do sistema
            if (excluirLocalizacaoItem({usua_id, loca_id, item_id})) {

                // Registra o item no inventório do jogador
                criarUsuarioItem({usua_id, item_id });
            }
        } else {

            // Retira uma unidade do item do db
            if (alterarLocalizacaoItemQtd({usua_id, loca_id, item_id, valor: -1})) {

                if (buscarUsuarioItem({usua_id, item_id}).length === 0) {
                    // Registra o item no inventório do jogador
                    criarUsuarioItem({usua_id, item_id });
                } else {
                    // Adiciona uma unidade do item no inventário do jogador
                    alterarUsuarioItem({usua_id, item_id}, 1);
                }
            }
        }
    });
}

export default pegarItens;
