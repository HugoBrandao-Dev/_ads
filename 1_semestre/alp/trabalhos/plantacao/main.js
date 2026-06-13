import carregarComandosPossiveis from "./src/carregarComandosPossiveis.js";
import validarComandos from "./src/validarComando.js";
import mostrarLocalizacaoAtual from "./src/locais/mostrarLocalizacaoAtual.js";
import locais from "./src/locais/locais.js";
import mostrarInventorio from "./src/inventorio/mostrarInventorio.js"
import escreva from "./src/saida.js";
import leia from "./src/entrada.js";
import chalk from "chalk";

/*
escreva(chalk.bgBlue("Comando de saída de dados..."));
let nome = leia(chalk.green("Comando para entrada de dados...Nome: "));

escreva("Seu nome é", nome);
*/

let sair = false;

while (!sair) {
    let acoesPossiveis = carregarComandosPossiveis();

    mostrarLocalizacaoAtual();
    mostrarInventorio();

    escreva("\nVocê pode:");

    // Ações baseadas nos item do inventório.
    escreva(acoesPossiveis.acoesItems);

    escreva("\nVocê pode ir para:");

    // Ações baseadas no local.
    escreva(acoesPossiveis.acoesLocal);

    escreva("\nCOMANDO: ");
    let comando = leia("> ");
    if (comando.toLowerCase() == "sair") {
        sair = true;
    } else {
        console.clear();
        if (validarComandos(comando)) {
            escreva("Comando válido");
        } else {
            escreva("Comando inválido");
        }
    }
}
