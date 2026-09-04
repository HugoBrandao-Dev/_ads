import db from "../conexao.ts";

const sql: string = `
    SELECT i.item_nome, i.item_descricao, ui.usit_quantidade FROM usuario_item AS ui
        INNER JOIN item AS i ON i.item_id = ui.item_id
    WHERE usua_id = ?;
`;

type Usuario = {
    usua_id: number
}

function listarUsuarioItem(usuarioItem: Usuario): unknown {
    const select = db.prepare(sql);

    return select.all(usuarioItem.usua_id);
}

export default listarUsuarioItem;
