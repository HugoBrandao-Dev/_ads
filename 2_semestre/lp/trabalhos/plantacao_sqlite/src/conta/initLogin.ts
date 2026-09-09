import leia from "../entrada.js";
import escreva from "../saida.js";
import initConfiguracoesJogador from "../jogador/initConfiguracoesJogador.ts";
import type { ParametroFazerLogin, RetornoFazerLogin } from "../db/usuario/TiposUsuario.ts";
import fazerLogin from "../db/usuario/fazerLogin.ts";

function initLogin() {
    const login: ParametroFazerLogin = { usua_usuario: "", usua_senha: "" };

    console.log();
    login.usua_usuario = leia("Usuario: ");
    login.usua_senha = leia("Senha: ");

    const result: RetornoFazerLogin = fazerLogin(login);

    if (result.usua_id !== 0) {
        initConfiguracoesJogador(result);
        console.clear();
        escreva("\nLogado com sucesso!!", "bgGreen");
    } else {
        escreva("\nUsuário ou senha inválido!!", "bgRed");
    }
}

export default initLogin;
