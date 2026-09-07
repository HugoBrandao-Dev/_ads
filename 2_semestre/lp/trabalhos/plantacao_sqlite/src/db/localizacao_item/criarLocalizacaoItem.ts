import db from "../conexao.ts";
import type { ParametroLocalizacaoItem } from "./configLocalizacaoItem.ts";

function prepararSQL(parametros: ParametroLocalizacaoItem): string {
    const chaves = Object.keys(parametros);
    const camposSQL = chaves.join(', ');
    const valoresSQL = '?'.repeat(chaves.length).split('').join();

    const sql: string = `
        INSERT INTO localizacao_item
            (${ camposSQL })
        VALUES (${ valoresSQL });
    `;

    return sql;
}

function criarLocalizacaoItem(parametros: ParametroLocalizacaoItem): boolean {
    const inserir = db.prepare(prepararSQL(parametros));
    return inserir.run(parametros.loca_id, parametros.item_id).changes === 1;
}

export default criarLocalizacaoItem;
