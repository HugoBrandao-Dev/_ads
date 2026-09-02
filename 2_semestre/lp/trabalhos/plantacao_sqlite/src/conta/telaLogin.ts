import contaLogada from "./contaLogada.ts";
import logar from "./logar.ts";
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
[S]air`);
        opcao = leia(`> `);

        switch (opcao) {
            case 'l':
                logar();
                break;
            case 'c':
                console.log("Cadastrar");
                break;
            case 's':
                console.log("Saiu...");
                break;
            default:
                escreva("\nOpção inválida");
        }

    } while (opcaoInvalida(opcao));
}

export default login;
