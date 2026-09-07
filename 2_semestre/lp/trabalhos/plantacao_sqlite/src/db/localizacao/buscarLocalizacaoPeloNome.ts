import db from "../conexao.ts";
import type { ParametroLocalizacaoPeloNome, RetornoLocalizacao } from "./configLocalizacao.ts";

const sql: string = `
    SELECT * FROM localizacao AS l WHERE l.loca_localizacao = ?;
`;

function buscarLocalizacaoPeloNome(parametros: ParametroLocalizacaoPeloNome): RetornoLocalizacao[] {
    const selecao = db.prepare(sql);
    return selecao.all(parametros.loca_localizacao) as RetornoLocalizacao[];
}

export default buscarLocalizacaoPeloNome;
