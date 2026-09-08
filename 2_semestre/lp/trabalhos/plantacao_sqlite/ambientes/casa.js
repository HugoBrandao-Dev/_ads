import escreva from "../src/saida.js";
import leia from "../src/entrada.js";
import itensJogo from "../src/items/itensJogo.ts";

let localAtual = "Casa";

export default {
    texto: "Você está na sala de estar da casa. Uma lareira apagada e uma poltrona empoeirada compõem o ambiente.",
    opcoes: {
        "1": { texto: "Sair para o Celeiro", destino: "Celeiro" },
        "2": { texto: "Olhar a lareira", arte: "lareira", acao: () => "Você olha dentro da lareira. Está cheia de cinzas e um jornal velho de uma semana atrás." },
        "3": itensJogo["Correio"],
        "4": itensJogo["Vassoura"]
    },
    items: []
};
