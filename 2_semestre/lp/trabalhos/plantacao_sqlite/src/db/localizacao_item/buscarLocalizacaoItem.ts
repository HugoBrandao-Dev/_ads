import db from "../conexao.ts";
import type { ParametroLocalizacaoItem, RetornoLocalizacaoItem } from "./configLocalizacaoItem.ts";

const sql: string = `
    SELECT * FROM localizacao_item AS li WHERE li.loca_id = ? AND li.item_id = ?;
`;

function buscarLocalizacaoItem(parametros: ParametroLocalizacaoItem): RetornoLocalizacaoItem[] {
    const selecao = db.prepare(sql);
    return selecao.all(parametros.loca_id, parametros.item_id) as RetornoLocalizacaoItem[];
}

export default buscarLocalizacaoItem;
