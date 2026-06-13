import escreva from "../saida.js";
import comandosPossiveis from "../carregarComandosPossiveis.js";

// A função abaixo mostrar as possíveis ações que o jogador pode fazer na localização atual.
export default function mostrarAcoes() {
    escreva("\nVocê pode ir para:");
    escreva(comandosPossiveis().acoesLocal);
}