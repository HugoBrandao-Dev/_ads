import db from "../conexao.ts";

type UsuarioUsuario = {
    usua_usuario: string
}

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

// Há um campo na tabela chamado "usua_usuario", que é usado para fazer o login
function buscarUsuarioPeloUsuario(usuario: UsuarioUsuario): ContaLogada[] {
    
    const select = db.prepare(`
        SELECT 
            usua_id, usua_nome 
        FROM usuario 
        WHERE 
            usuario.usua_usuario = ?;
    `);

     const result = select.all(usuario.usua_usuario) as ContaLogada[];

     return result;
}

export default buscarUsuarioPeloUsuario;
