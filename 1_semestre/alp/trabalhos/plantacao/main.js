import locais from "./src/locais.js";
import campos from "./src/campos/campos.js";
import comodos from "./src/comodos/comodos.js";
import acoes from "./src/items/acoes.js";
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
    let items = null;
    let acoesItems = inventorio.map(i => Object.keys(acoes[i]));;
    let acoesLocal = null;
    if (locais.espaco == "campo") {
        acoesLocal = campos[locais.local].conexoes;
    } else {
        acoesLocal = comodos[locais.local].conexoes;
    }

    console.clear();

    console.log('='.repeat(40));
    console.log("Você está na", locais.espaco.toUpperCase());
    console.log("Mais precisamente no(a)", locais.local.toLocaleLowerCase());
    console.log('='.repeat(40));

    console.log("\nINVENTÓRIO:");
    inventorio.forEach(i => console.log(`[ ${ i } ]`))

    console.log("\nVocê pode:");

    // Ações baseadas nos item do inventório.
    console.log(acoesItems);

    console.log("\nVocê pode ir para:");
    console.log(acoesLocal);

    let acao = entrada("AÇÃO: ");
    if (acao.toLowerCase() == "sair") {
        sair = true;
    } else {
        
    }
}
