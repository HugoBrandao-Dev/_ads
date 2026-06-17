import leia from "../src/entrada.js";
import escreva from "../src/saida.js";

export default {
    texto: "Você está na Horta, o cheiro de terra molhada é relaxante.",
    opcoes: {
        "1": { texto: "Voltar para o Celeiro", destino: "Celeiro" },
        "2": { texto: "Ir para o Pasto 02", destino: "Pasto02" },
        "3": { texto: "Regar os tomates", arte: "gota", acao: () => "Você pegou o regador e molhou a terra. Os tomates parecem mais vivos!" },
        "4": { texto: "Inspecionar a terra", arte: "minhoca", acao: () => {
            escreva("Você mexe na terra e encontra uma minhoca gigante.", "yellow");
            escreva("[1] Colocar na terra de novo", "green");
            escreva("[2] Guardar no bolso para usar de isca", "green");
            
            const escolha = leia("\nO que vai fazer com ela? > ");
            if (escolha === "1") return "A minhoca voltou para a terra. Ótimo para a saúde do solo!";
            if (escolha === "2") return "Você guardou a minhoca no bolso. Eca!";
            return "Você ficou encarando a minhoca até ela fugir.";
        } },
        "5": { texto: "Arrancar ervas daninhas", arte: "grama", acao: () => "Você passou alguns minutos limpando os canteiros. A horta parece muito mais organizada." },
        "6": { texto: "Colher tomates maduros", arte: "tomate", acao: () => "Você encontrou alguns tomates vermelhos e suculentos. Parecem deliciosos!" },
        "7": { texto: "Verificar o espantalho", arte: "espantalho", acao: () => "O espantalho está um pouco torto e com um chapéu engraçado. Parece que está fazendo um bom trabalho, nenhum pássaro por perto." }
    }
};
