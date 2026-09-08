import leia from "../entrada.js";
import escreva from "../saida.js";
import buscarUsuarioSenha from "../db/usuario/buscarUsuarioSenha.ts";
import initConfiguracoesJogador from "../jogador/initConfiguracoesJogador.ts";

interface Login {
    usuario: string,
    senha: string
}
const login: Login = { usuario: "", senha: "" };

type ContaLogada = {
    usua_id: number,
    usua_nome: string
}

function initLogin() {

    console.log();
    login.usuario = leia("Usuario: ");
    login.senha = leia("Senha: ");

    const result: ContaLogada[] = buscarUsuarioSenha(login);

    if (Object.keys(result).length === 1) {
        initConfiguracoesJogador(result[0]!);
        escreva("\nLogado com sucesso!!", "bgGreen");
    } else {
        escreva("\nUsuário ou senha inválido!!", "bgRed");
    }
}

export default initLogin;
