import db from "../conexao.ts";

const sql: string = `
    DELETE FROM usuario_item AS ui WHERE ui.usua_id = ? AND ui.item_id = ?;
`;

type UsuarioItemID = {
    usua_id: number,
    item_id: number
}

function excluirUsuarioItem(usuarioItemID: UsuarioItemID): unknown {
    const select = db.prepare(sql);

    return select.run(usuarioItemID.usua_id, usuarioItemID.item_id);
}

export default excluirUsuarioItem;
