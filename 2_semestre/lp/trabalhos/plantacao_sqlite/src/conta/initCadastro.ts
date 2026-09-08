import criarUsuario from "../db/usuario/criarUsuario.ts";
import buscarUsuarioPeloUsuario from "../db/usuario/buscarUsuarioPeloUsuario.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";
import validator from "validator";
import buscarUsuarioPeloEmail from "../db/usuario/buscarUsuarioPeloEmail.ts";

type Usuario = {
    usua_nome: string,
    usua_email: string,
    usua_usuario: string,
    usua_senha: string,
}

function validarEmail(email: string): string {
    if (!validator.isEmail(email)) {
        return "E-mail inválido";
    }
    if (buscarUsuarioPeloEmail({usua_email: email}).length !== 0) {
        return "E-mail já cadastrado";
    }

    return ""
}

function validarSenha(senhas: string[]): string {
    if (!validator.isStrongPassword(senhas[0]!)) {
        return "A senha é muito fraca";
    }
    if (senhas[0] !== senhas[1]) {
        return "As senhas são diferentes";
    }
    return "";
}

function initCadastrar() {
    let email: string = "";
    let erro: string = "";
    let cadastro: Usuario = {
        usua_nome: "",
        usua_email: "",
        usua_usuario: "",
        usua_senha: ""
    };

    cadastro.usua_nome = leia("Informe seu nome: ");

    do {
        email = leia("Informe seu email: ");
        erro = validarEmail(email);
        if (erro.length !== 0) {
            escreva(`\n${ erro }\n`, "bgRed");
        }
    } while (erro.length !== 0);

    cadastro.usua_email = email;
    cadastro.usua_usuario = leia("Usuário (para login): ");

    while (buscarUsuarioPeloUsuario({usua_usuario: cadastro.usua_usuario}).length !== 0) {
        escreva("\nUsuário para login já cadastrado, escolha outro!!!", "bgRed");
        cadastro.usua_usuario = leia("Usuário (para login): ");
    }

    do {
        cadastro.usua_senha = leia("Senha: ");
        let senhaNovamente: string = leia("Digite novamente a senha: ");
        erro = validarSenha([cadastro.usua_senha, senhaNovamente]);
        if (erro.length !== 0) {
            escreva(`\n${ erro }\n`, "bgRed");
        }
    } while (erro.length !== 0);

    const criadoComSucesso: boolean = criarUsuario(cadastro) !== 0;

    if (criadoComSucesso) {
        escreva("\nCadastrado com sucesso!!", "bgGreen");
    } else {
        throw new Error("Erro no cadastramento do usuário");
    }
}

export default initCadastrar;
