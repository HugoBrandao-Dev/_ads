import { estado } from "../../../ambientes/index.js";
import contaLogada from "../../conta/contaLogada.ts";
import buscarLocalizacaoPeloNome from "../../db/localizacao/buscarLocalizacaoPeloNome.ts";
import type { RetornoLocalizacao } from "../../db/localizacao/configLocalizacao.ts";
import alterarLocalizacaoItemQtd from "../../db/localizacao_item/alterarLocalizacaoItemQtd.ts"

function comerItens(itensID: number[]) {
    const localAtual: RetornoLocalizacao[] = buscarLocalizacaoPeloNome({loca_localizacao: estado.ambienteAtual!});
    const loca_id: number = localAtual[0]?.loca_id!;
    const usua_id: number = contaLogada.usua_id;

    itensID.forEach(item_id => {
        alterarLocalizacaoItemQtd({usua_id, item_id, loca_id, valor: -1});
    })
}

export default comerItens;
