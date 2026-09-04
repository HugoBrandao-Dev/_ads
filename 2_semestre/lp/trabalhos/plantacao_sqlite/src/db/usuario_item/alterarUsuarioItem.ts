import db from "../conexao.ts";


function prepararSQL(operacao: number): string {
    let sql: string = "";
    const operacaoSQL: string = operacao > 0 ? `+ ${ Math.abs(operacao) }` : `- ${ Math.abs(operacao) }`;
    console.log(operacaoSQL);

    sql = `
        UPDATE 
            usuario_item 
        SET usit_quantidade = (usit_quantidade ${ operacaoSQL }) 
        WHERE (usua_id = ? AND item_id = ?);
    `

    return sql
}

type UsuarioItemID = {
    usua_id: number,
    item_id: number
}

/**
 * Esse método só fará alterações na quantidade do item no inventório.
 * 
 * @operacao - Valor positivo para somar e valor negativo para subtrair do inventário.
*/
function alterarUsuarioItem(usuarioItemID: UsuarioItemID, operacao: number): unknown {
    const sql: string = prepararSQL(operacao);

    const alterar = db.prepare(sql);

    return alterar.run(usuarioItemID.usua_id, usuarioItemID.item_id);
}

export default alterarUsuarioItem;
