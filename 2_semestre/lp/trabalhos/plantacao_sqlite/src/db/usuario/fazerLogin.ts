import bcrypt from "bcrypt";
import db from "../conexao.ts";

import type { ParametroFazerLogin, RetornoFazerLogin, UsuarioDDL } from "./TiposUsuario.ts";

const sqlSelecaoCompleta: string = `
    SELECT * FROM usuario AS u WHERE u.usua_usuario = ?;
`;

function fazerLogin(login: ParametroFazerLogin): RetornoFazerLogin {
    const result: RetornoFazerLogin = { usua_id: 0, usua_nome: "" };

    const selecao = db.prepare(sqlSelecaoCompleta);
    const usuarios = selecao.all(login.usua_usuario);

    if (usuarios.length) {
        const usuario = usuarios[0] as UsuarioDDL;

        if (bcrypt.compareSync(login.usua_senha, usuario.usua_senha)) {
            result.usua_id = usuario.usua_id,
            result.usua_nome = usuario.usua_nome
        }
    }

    return result;
}

export default fazerLogin;
