import leia from "../src/entrada.js";
import itensJogo from "../src/items/itensJogo.ts";
import escreva from "../src/saida.js";

export default {
    texto: "Você está no Pasto 02. Um ambiente tranquilo com algumas árvores ao fundo.",
    opcoes: {
        "1": { texto: "Voltar para a Horta", destino: "Horta" },
        "2": { texto: "Descansar na sombra", arte: "arvore", acao: () => "Você senta encostado em uma árvore e sente a brisa fresca. Revigorante!" },
        "3": itensJogo["Maca"]
    }
};