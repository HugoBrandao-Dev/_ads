import db from "../conexao.ts";

const sql: string = `
    SELECT * FROM usuario_item AS ui WHERE ui.usua_id = ? AND ui.item_id = ?;
`;

type UsuarioItemID = {
    usua_id: number,
    item_id: number
}

function buscarUsuarioItemPeloIDItem(usuarioItemID: UsuarioItemID): unknown {
    const select = db.prepare(sql);

    return select.all(usuarioItemID.usua_id, usuarioItemID.item_id);
}

export default buscarUsuarioItemPeloIDItem;
