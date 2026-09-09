import db from "../conexao.ts";

function prepararSQL(operacao: number): string {
    const operacaoSQL: string = operacao > 0 ? `+ ${ operacao }` : `- ${ Math.abs(operacao) }`;

    const sql: string = `
        UPDATE 
            usuario_localizacao_item 
        SET 
            loit_qt_item = loit_qt_item ${ operacaoSQL }
        WHERE
            usua_id = ? AND
            loca_id = ? AND
            item_id = ?;
    `;

    return sql;
}

type LocalizacaoItem = {
    usua_id: number,
    loca_id: number,
    item_id: number,
    valor: number
}

function alterarLocalizacaoItemQtd(localizacaoItem: LocalizacaoItem): unknown {
    const sql: string = prepararSQL(localizacaoItem.valor);
    const alterar = db.prepare(sql);
    return alterar.run(localizacaoItem.usua_id, localizacaoItem.loca_id, localizacaoItem.item_id);
}

export default alterarLocalizacaoItemQtd;