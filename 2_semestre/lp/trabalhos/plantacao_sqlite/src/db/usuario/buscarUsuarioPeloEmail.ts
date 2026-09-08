import db from "../conexao.ts";
import type { ParametroBuscarUsuarioPeloEmail, RetornoBuscarUsuarioPeloEmail } from "./TiposUsuario.ts";

const sql: string = `
    SELECT u.usua_id, u.usua_nome, u.usua_email FROM usuario AS u WHERE u.usua_email = ?;
`;

function buscarUsuarioPeloEmail(parametro: ParametroBuscarUsuarioPeloEmail): RetornoBuscarUsuarioPeloEmail[] {
    const selecao = db.prepare(sql);
    return selecao.all(parametro.usua_email) as RetornoBuscarUsuarioPeloEmail[];
}

export default buscarUsuarioPeloEmail;
