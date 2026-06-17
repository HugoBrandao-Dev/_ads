import leia from "../src/entrada.js";
import escreva from "../src/saida.js";
import pegar from "../src/items/pegarItem.js";

export default {
    texto: "Você está no Celeiro. À esquerda está o Pasto 01, à direita a Horta.",
    opcoes: {
        "1": { texto: "Voltar para Casa", destino: "Casa" },
        "2": { texto: "Ir para o Pasto 01", destino: "Pasto01" },
        "3": { texto: "Ir para a Horta", destino: "Horta" },
        "4": { texto: "Procurar nos caixotes", arte: "caixote", acao: () => {
            escreva("Você revira uns caixotes empoeirados...", "yellow");
            escreva("[1] Abrir o caixote pequeno", "green");
            escreva("[2] Abrir o caixote grande", "green");
            
            const escolha = leia("\nQual caixote você quer abrir? > ");
            if (escolha === "1") return "Você encontrou apenas alguns pregos enferrujados e teias de aranha.";
            if (escolha === "2") {
                escreva("\nVocê encontrou uma velha Enxada!\n", "magenta");
                
                let escolha = leia("Deseja pegá-la? [s/n]")
                if (escolha.toLowerCase() === "s") {
                    if (!pegar("enxada")) {
                        return "Aparentemente, você já tem esse item.";
                    }
                }
                return "Você pegou a velha Enxada.";
            };
            return "Você desistiu de procurar e deixou os caixotes em paz.";
        } },
        "5": { texto: "Limpar as baias", arte: "vassoura", acao: () => "Você pegou uma vassoura e limpou as baias. Deu trabalho, mas o celeiro está mais cheiroso." },
        "6": { texto: "Descansar no feno", arte: "zzz", acao: () => "Você deita em um monte de feno macio e tira um cochilo de 10 minutos. Revigorante!" }
    }
};
