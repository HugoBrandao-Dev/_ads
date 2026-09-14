import db from "../conexao.ts";
import type { RetornoLocalizacao } from "./configLocalizacao.ts";

const sql: string = `
    SELECT 
        l.loca_localizacao, 
        l.loca_descricao 
    FROM localizacao AS l;
`

function listarLocalizacao(): RetornoLocalizacao[] {
    const selectItem = db.prepare(sql);
    return selectItem.all() as RetornoLocalizacao[];
}

export default listarLocalizacao;
