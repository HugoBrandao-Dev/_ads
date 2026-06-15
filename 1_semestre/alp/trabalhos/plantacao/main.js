import carregarComandosPossiveis from "./src/carregarComandosPossiveis.js";
import validarComandos from "./src/validarComando.js";
import mostrarLocalizacaoAtual from "./src/locais/mostrarLocalizacaoAtual.js";
import mostrarAcoesItemsInventorio from "./src/inventorio/mostrarAcoesItems.js";;
import mostrarAcoesLocalizacao from "./src/locais/mostrarAcoes.js";
import mostrarInventorio from "./src/inventorio/mostrarInventorio.js";
import executarComando from "./src/executarComando.js";
import escreva from "./src/saida.js";
import leia from "./src/entrada.js";

let sair = false;

while (!sair) {
    let acoesPossiveis = carregarComandosPossiveis();

    mostrarLocalizacaoAtual();
    mostrarInventorio();
    mostrarAcoesItemsInventorio();
    mostrarAcoesLocalizacao();

    escreva("\nCOMANDO: ");
    let comando = leia("> ");
    if (comando.toLowerCase() == "sair") {
        sair = true;
    } else {
        console.clear();
        if (validarComandos(comando)) {
            executarComando(comando);
        } else {
            escreva("Comando inválido", "bgRed");
        }
    }
}
