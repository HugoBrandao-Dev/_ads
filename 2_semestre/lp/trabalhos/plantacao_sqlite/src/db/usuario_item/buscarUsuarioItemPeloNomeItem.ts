import db from "../conexao.ts";

const sql: string = `
    SELECT * FROM usuario_item AS ui WHERE ui.item_id = ?;
`;

type UsuarioItemID = {
    item_id: number
}

function buscarUsuarioItemPeloIDItem(usuarioItemID: UsuarioItemID): unknown {
    const select = db.prepare(sql);

    return select.all(usuarioItemID.item_id);
}

export default buscarUsuarioItemPeloIDItem;
