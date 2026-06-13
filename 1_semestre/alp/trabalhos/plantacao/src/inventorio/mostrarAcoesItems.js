import escreva from "../saida.js";
import comandosPossiveis from "../carregarComandosPossiveis.js";

// A função abaixo mostrará as ações somente dos items presentes no inventório do jogador.
export default function mostrarAcoesItems() {
    escreva("\nVocê pode:");
    escreva(comandosPossiveis().acoesItems);
}