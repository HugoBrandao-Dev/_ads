import bcrypt from "bcrypt";
import db from "../conexao.ts";
import saltRounds from "../auth/configBcrypt.ts";

type Usuario = {
    usua_nome: string,
    usua_email: string,
    usua_usuario: string,
    usua_senha: string
}

function criarUsuario(usuario: Usuario): unknown {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(usuario.usua_senha, salt);
    if (hash) {
        const inserir = db.prepare(`
        INSERT INTO usuario
            (usua_nome, usua_email, usua_usuario, usua_senha)
        VALUES
            (?, ?, ?, ?);
        `);

        return inserir.run(usuario.usua_nome, usuario.usua_email, usuario.usua_usuario, hash).lastInsertRowid;
    }
    
    return 0;
}

export default criarUsuario;
