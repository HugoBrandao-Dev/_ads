import buscarUsuarioPeloUsuario from "../db/usuario/buscarUsuarioPeloUsuario.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";

type Usuario = {
    usua_nome: string,
    usua_email: string,
    usua_usuario: string,
    usua_senha: string,
}

function initCadastrar() {
    let cadastro: Usuario = {
        usua_nome: "",
        usua_email: "",
        usua_usuario: "",
        usua_senha: ""
    };

    cadastro.usua_nome = leia("Informse seu nome: ");
    cadastro.usua_email = leia("Informe seu email: ");
    cadastro.usua_usuario = leia("Usuário (para login): ");

    while (buscarUsuarioPeloUsuario({usua_usuario: cadastro.usua_usuario}).length !== 0) {
        escreva("\nUsuário para login já cadastrado, escolha outro!!!", "bgRed");
        cadastro.usua_usuario = leia("Usuário (para login): ");
    }

    cadastro.usua_senha = leia("Senha: ");
    
    let senhaNovamente: string = leia("Digite novamente a senha: ");

    while (cadastro.usua_senha !== senhaNovamente) {
        escreva("\nAs senhas não conferem!!", "bgRed");
        senhaNovamente = leia("Digite novamente a senha: ");
    }

    console.log("Cadastrado com sucesso!!");
}

export default initCadastrar;
