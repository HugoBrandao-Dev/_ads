import initLogin from "./initLogin.ts";
import initCadastro from "./initCadastro.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";

type OpcoesValidas = 'l' | 'c' | 's';

function opcaoInvalida(opcao: OpcoesValidas): boolean {
    // Verifica se a opção do usuaŕio é um caracter.
    const eLetra: boolean = opcao.length === 1;

    // Verifica se é a letra l, r, s.
    const eLetraMenu: boolean = ['l', 'c', 's'].includes(opcao.toLowerCase());

    return !eLetra || !eLetraMenu;
}

function login() {
    let opcao: OpcoesValidas;

    do {
        escreva(`
[L]ogar
[C]adastrar
[S]air`, "grey");
        opcao = leia(`> `);

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

    } while (opcaoInvalida(opcao) && opcao !== 's');
}

export default login;
