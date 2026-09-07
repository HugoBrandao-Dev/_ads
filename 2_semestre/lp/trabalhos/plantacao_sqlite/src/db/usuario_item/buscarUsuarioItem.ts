import db from "../conexao.ts";
import type { ParametroUsuarioItem, RetornoUsuarioItem } from "./configUsuarioItem.ts";

const sql: string = `
    SELECT * FROM usuario_item AS ui WHERE ui.usua_id = ? AND ui.item_id = ?;
`;

function buscarUsuarioItem(usuarioItem: ParametroUsuarioItem): RetornoUsuarioItem[] {
    const select = db.prepare(sql);
    return select.all(usuarioItem.usua_id, usuarioItem.item_id) as RetornoUsuarioItem[];
}

export default buscarUsuarioItem;
