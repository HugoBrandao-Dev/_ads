import buscarUsuarioSenha from "../db/usuario/buscarUsuarioSenha.ts";
import leia from "../entrada.js";
import contaLogada from "./contaLogada.ts";
import escreva from "../saida.js";

interface Login {
    usuario: string,
    senha: string
}
const login: Login = { usuario: "", senha: "" };

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

function logar() {

    login.usuario = leia("Usuario: ");
    login.senha = leia("Senha: ");

    const result: ContaLogada[] = buscarUsuarioSenha(login);

    if (Object.keys(result).length === 1) {
        contaLogada.usua_id = result[0]!.usua_id;
        contaLogada.usua_nome = result[0]!.usua_nome;
        escreva("\nLogado com sucesso!!", "bgGreen");
    } else {
        escreva("\nUsuário ou senha inválido!!", "bgRed");
    }
}

export default logar;
