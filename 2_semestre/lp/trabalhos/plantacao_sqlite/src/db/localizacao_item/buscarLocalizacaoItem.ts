import db from "../conexao.ts";
import type { ParametroLocalizacaoItem, RetornoLocalizacaoItem } from "./configLocalizacaoItem.ts";

const sql: string = `
    SELECT * FROM 
        usuario_localizacao_item AS uli 
    WHERE 
        uli.usua_id = ? AND
        uli.loca_id = ? AND 
        uli.item_id = ?;
`;

function buscarLocalizacaoItem(parametros: ParametroLocalizacaoItem): RetornoLocalizacaoItem[] {
    const selecao = db.prepare(sql);
    return selecao.all(parametros.usua_id, parametros.loca_id, parametros.item_id) as RetornoLocalizacaoItem[];
}

export default buscarLocalizacaoItem;
