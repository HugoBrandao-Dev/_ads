import carregarComandosPossiveis from "./src/carregarComandosPossiveis.js";
import validarComandos from "./src/validarComando.js";
import locais from "./src/locais.js";
import inventorio from "./src/inventorio.js"
import escreva from "./src/saida.js";
import leia from "./src/entrada.js";
import chalk from "chalk";
import entrada from "./src/entrada.js";

/*
escreva(chalk.bgBlue("Comando de saída de dados..."));
let nome = leia(chalk.green("Comando para entrada de dados...Nome: "));

escreva("Seu nome é", nome);
*/

let sair = false;

while (!sair) {
    let acoesPossiveis = carregarComandosPossiveis();

    console.log('='.repeat(40));
    console.log("Você está na", locais.espaco.toUpperCase());
    console.log("Mais precisamente no(a)", locais.local.toLocaleLowerCase());
    console.log('='.repeat(40));

    console.log("\nINVENTÓRIO:");
    inventorio.forEach(i => console.log(`[ ${ i } ]`))

    console.log("\nVocê pode:");

    // Ações baseadas nos item do inventório.
    console.log(acoesPossiveis.acoesItems);

    console.log("\nVocê pode ir para:");

    // Ações baseadas no local.
    console.log(acoesPossiveis.acoesLocal);

    escreva("\nCOMANDO: ");
    let comando = leia("> ");
    if (comando.toLowerCase() == "sair") {
        sair = true;
    } else {
        console.clear();
        if (validarComandos(comando)) {
            console.log("Comando válido");
        } else {
            console.log("Comando inválido");
        }
    }
}
