import db from "../conexao.ts";

interface Usuario {
    nome: string,
    email: string,
    usuario: string,
    senha: string
}

let interfaceUsuario: Usuario = {
    nome: "",
    email: "",
    usuario: "",
    senha: ""
}

function novoUsuario(usua: Usuario): unknown {
    const inserir = db.prepare(`
        INSERT INTO usuario
            (usua_nome, usua_email, usua_usuario, usua_senha)
        VALUES
            (?, ?, ?, ?);
    `);

    return inserir.run(usua.nome, usua.email, usua.usuario, usua.senha).lastInsertRowid;
}

export {
    novoUsuario,
    interfaceUsuario
}
