import db from "../conexao.ts";

type Usuario = {
    usua_nome: string,
    usua_email: string,
    usua_usuario: string,
    usua_senha: string
}

function criarUsuario(usuario: Usuario): unknown {
    const inserir = db.prepare(`
        INSERT INTO usuario
            (usua_nome, usua_email, usua_usuario, usua_senha)
        VALUES
            (?, ?, ?, ?);
    `);

    return inserir.run(usuario.usua_nome, usuario.usua_email, usuario.usua_usuario, usuario.usua_senha).lastInsertRowid;
}

export default criarUsuario;
