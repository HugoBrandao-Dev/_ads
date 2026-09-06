import db from "../conexao.ts";

function prepararSQL(operacao: number): string {
    const operacaoSQL: string = operacao > 0 ? `+ ${ operacao }` : `- ${ Math.abs(operacao) }`;

    const sql: string = `
        UPDATE 
            localizacao_item 
        SET 
            loit_quantidade = loit_quantidade ${ operacaoSQL }
        WHERE
            loca_id = ?
            AND
            item_id = ?
    `;

    return sql;
}

type LocalizacaoItem = {
    loca_id: number,
    item_id: number,
    valor: number
}

function alterarLocalizacaoItemQtd(localizacaoItem: LocalizacaoItem): unknown {
    const sql: string = prepararSQL(localizacaoItem.valor);
    const alterar = db.prepare(sql);
    return alterar.run(localizacaoItem.loca_id, localizacaoItem.item_id)
}

export default alterarLocalizacaoItemQtd;