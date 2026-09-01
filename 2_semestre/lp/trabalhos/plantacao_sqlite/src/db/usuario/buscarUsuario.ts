import db from "../conexao.ts";

interface Login {
    usuario: string,
    senha: string
}

let interfaceLogin: Login = {
    usuario: "",
    senha: ""
}

function buscarUsuario(login: Login): unknown {
    const usuario = db.prepare(`
        SELECT usua_id, usua_nome FROM usuario WHERE usuario.usua_usuario = ? AND usuario.usua_senha = ?;
            (?, ?, ?, ?);
    `);

    return usuario.run(login.usuario, login.senha);
}

export {
    buscarUsuario,
    interfaceLogin
}
