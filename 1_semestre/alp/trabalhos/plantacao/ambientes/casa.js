import escreva from "../src/saida.js";
import leia from "../src/entrada.js";

export default {
    texto: "Você está na sala de estar da casa. Uma lareira apagada e uma poltrona empoeirada compõem o ambiente.",
    opcoes: {
        "1": { texto: "Sair para o Celeiro", destino: "Celeiro" },
        "2": { texto: "Olhar a lareira", arte: "lareira", acao: () => "Você olha dentro da lareira. Está cheia de cinzas e um jornal velho de uma semana atrás." },
        "3": { texto: "Verificar o correio", arte: "carta", acao: () => {
            escreva("Você vai até a porta e olha a caixa de correio.", "yellow");
            escreva("[1] Abrir a caixa", "green");
            escreva("[2] Deixar para depois", "green");
            const escolha = leia("\nO que você faz? > ");
            if (escolha === "1") return "Dentro há apenas uma conta de luz vencida e um panfleto de pizzaria.";
            return "Você decide não olhar o correio agora.";
        } }
    }
};
