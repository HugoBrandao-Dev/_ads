import db from "../conexao.ts";
import type { ParametroLocalizacaoItem } from "./configLocalizacaoItem.ts";

const sql: string = `
    DELETE FROM 
        localizacao_item AS li 
    WHERE 
        li.loca_id = ? AND
        li.item_id = ?;
`;

function excluirLocalizacaoItem(parametros: ParametroLocalizacaoItem): boolean {
    const exclusao = db.prepare(sql);
    return exclusao.run(parametros.loca_id, parametros.item_id).changes === 1;
}

export default excluirLocalizacaoItem;
