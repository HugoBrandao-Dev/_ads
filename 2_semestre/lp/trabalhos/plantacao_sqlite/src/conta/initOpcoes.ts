import inquirer from "inquirer";
import initLogin from "./initLogin.ts";
import initCadastro from "./initCadastro.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";
import contaLogada from "./contaLogada.ts";

type OpcoesValidas = 'l' | 'c' | 's';

function opcaoInvalida(opcao: OpcoesValidas): boolean {
    // Verifica se a opção do usuaŕio é um caracter.
    const eLetra: boolean = opcao.length === 1;

    // Verifica se é a letra l, r, s.
    const eLetraMenu: boolean = ['l', 'c', 's'].includes(opcao.toLowerCase());

    return !eLetra || !eLetraMenu;
}

async function login() {
    let opcao: OpcoesValidas;

    do {
        const resposta = await inquirer.prompt([
            {
                type: "select",
                name: "opcao",
                message: "Menu",
                choices: [
                    { name: "Logar", value: "l" },
                    { name: "Cadastrar", value: "c" },
                    { name: "Sair", value: "s" },
                ],
            },
        ]);
        opcao = resposta.opcao;
        console.clear();
        switch (opcao) {
            case 'l':
                initLogin();
                break;
            case 'c':
                initCadastro();
                break;
            case 's':
                console.log("Saiu...");
                break;
            default:
                escreva("\nOpção inválida");
        }

    } while (contaLogada.usua_id === 0 && opcao !== 's');
}

export default login;
