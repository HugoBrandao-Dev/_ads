import contaLogada from "./contaLogada.ts";
import logar from "./logar.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";

function login() {
    while (!(contaLogada.usua_id)) {

        let opcao: string = "";

        // Verifica se a opção do usuaŕio é um caracter (r ou l)
        while (opcao.length !== 1 || !['l', 'r'].includes(opcao.toLocaleLowerCase())) {
            console.log();
            opcao = leia("[L]ogar ou [R]egistrar? <l/r>  ");

            if (opcao === 'l') {
                logar();
            } else  {
                // cadastrar();
            }
        }
    }
}

export default login;
