import db from "../conexao.ts";
import type { ParametroLocalizacaoItem } from "./configLocalizacaoItem.ts";

const sql: string = `
    DELETE FROM 
        usuario_localizacao_item AS uli 
    WHERE 
        uli.usua_id = ? AND
        uli.loca_id = ? AND
        uli.item_id = ?;
`;

function excluirLocalizacaoItem(parametros: ParametroLocalizacaoItem): boolean {
    const exclusao = db.prepare(sql);
    return exclusao.run(parametros.usua_id, parametros.loca_id, parametros.item_id).changes === 1;
}

export default excluirLocalizacaoItem;
