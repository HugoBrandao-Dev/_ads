import contaLogada from "../../conta/contaLogada.ts";
import db from "../conexao.ts";

interface Login {
    usuario: string,
    senha: string
}

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

function buscarUsuario(login: Login): ContaLogada[] {
    
    const select = db.prepare(`
        SELECT 
            usua_id, usua_nome 
        FROM usuario 
        WHERE 
            usuario.usua_usuario = ? AND 
            usuario.usua_senha = ?;
    `);

     const result = select.all(login.usuario, login.senha) as ContaLogada[];

     return result;
}

export default buscarUsuario;
