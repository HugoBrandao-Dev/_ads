import db from "../conexao.ts";
import type { ParametroUsuarioItem } from "./configUsuarioItem.ts";

const sql: string = `
    DELETE FROM usuario_item AS ui WHERE ui.usua_id = ? AND ui.item_id = ?;
`;

function excluirUsuarioItem(usuarioItem: ParametroUsuarioItem): boolean {
    const select = db.prepare(sql);

    return select.run(usuarioItem.usua_id, usuarioItem.item_id).changes === 1;
}

export default excluirUsuarioItem;
