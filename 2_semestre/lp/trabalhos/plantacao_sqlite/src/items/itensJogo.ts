import escreva from "../saida.js";
import leia from "../entrada.js";
import temItensRequeridos from "../jogador/temItensRequeridos.ts";
import buscarItemPeloNome from "../db/item/buscarItemPeloNome.ts";
import type { ItemRetorno } from "../db/item/configItem.ts";

const itensJogo: object = {
    "Vassoura": { 
        texto: "Há uma vassoura perto da porta", arte: "vassoura", 
        acao: () => {
            const itensRequerido: string[] = ["Vassoura", "Maçã"];

            const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
            });

            const temItens: boolean = temItensRequeridos(itensRegistros);

            if (!temItens) {
                escreva("\nVocê encontrou uma Vassoura!\n", "magenta");
            
                let escolha = leia("Deseja pegá-lo? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    /*
                    if (pegar("vassoura")) {
                        return "Você pegou a Vassoura.";
                    }
                        */
                    return "";
                }
            } else {
                escreva("\nVocê está carregando uma vassoura o tempo todo...\n", "magenta");

                let escolha = leia("Deseja colocar a vassoura perto da porta? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    /*
                    guardar("vassoura", localAtual);
                    */
                    return "Você colocou a Vassoura perto da porta.";
                }
            }

            return "Você apenas olhou a vassoura e não fez nada!!!";
        } 
    }
}

export default itensJogo;
