import contaLogada from "./contaLogada.ts";
import logar from "./logar.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";

function login() {
    while (!(contaLogada.usua_id)) {
        escreva("Você não está logado!!");

        let opcao: string = "";

        // Verifica se a opção do usuaŕio é um caracter (r ou l)
        while (opcao.length !== 1 || !['l', 'r'].includes(opcao.toLocaleLowerCase())) {
            opcao = leia("[L]ogar ou [R]egistrar? <l/r>  ");

            if (opcao === 'l') {
                logar();
            } else  {
                // cadastrar();
            }
        }

    /*
    const usua_id: number = leia("> ");

    if (usua_id != 0) {
        contaLogada.usua_id = usua_id;
        escreva("Logado com sucesso!!");
    }
    */
    }
}

export default login;
