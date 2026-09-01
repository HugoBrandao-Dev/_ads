import conta from "./conta.ts";
import leia from "../entrada.js";
import escreva from "../saida.js";

function login() {
    while (!(conta.usua_id)) {
        escreva("Você não está logado!!");

        let opcao: string = "";

        // Verifica se a opção do usuaŕio é um caracter (r ou l)
        while (opcao.length !== 1 || !['l', 'r'].includes(opcao.toLocaleLowerCase())) {
            opcao = leia("[L]ogar ou [R]egistrar?  ");

            if (opcao === 'l') {
                logar();
            } else  {
                cadastrar();
            }
        }

    /*
    const usua_id: number = leia("> ");

    if (usua_id != 0) {
        conta.usua_id = usua_id;
        escreva("Logado com sucesso!!");
    }
    */
    }
}

export default login;
