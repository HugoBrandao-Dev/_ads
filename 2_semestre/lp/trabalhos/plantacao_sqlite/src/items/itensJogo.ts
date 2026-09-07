import escreva from "../saida.js";
import leia from "../entrada.js";
import temItensRequeridos from "../jogador/temItensRequeridos.ts";
import buscarItemPeloNome from "../db/item/buscarItemPeloNome.ts";
import pegarItens from "../jogador/acoes/pegarItens.ts";
import guardarItens from "../jogador/acoes/guardarItens.ts";

import type { ItemRetorno } from "../db/item/configItem.ts";

const itensJogo: object = {
    "Vassoura": { 
        texto: "Há uma vassoura perto da porta", 
        arte: "vassoura", 
        acao: () => {
            const itensRequerido: string[] = ["Vassoura"];

            const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
            });
            const itensID: number[] = itensRegistros.map(i => i.item_id);

            const temItens: boolean = temItensRequeridos(itensRegistros);

            if (!temItens) {
                escreva("\nVocê encontrou uma Vassoura!\n", "magenta");
            
                let escolha = leia("Deseja pegá-lo? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    pegarItens(itensID);

                    return "Você pegou a Vassoura.";
                }
            } else {
                escreva("\nVocê está carregando uma vassoura o tempo todo...\n", "magenta");

                let escolha = leia("Deseja colocar a vassoura perto da porta? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    
                    guardarItens(itensID);

                    return "Você colocou a Vassoura perto da porta.";
                }
            }

            return "Você apenas olhou a vassoura e não fez nada!!!";
        },
        usar: {
            "Bainha": () => {
                const itensRequerido: string[] = ["Vassoura"];

                const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                    return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
                });

                const temItens: boolean = temItensRequeridos(itensRegistros);

                if (!temItens) {
                    return "OPS!! Você está sem um vassoura!!";
                }

                return "Com uma vassoura em mãos, você limpou as baias. Deu trabalho, mas o celeiro está mais cheiroso."
            }
        }
    },
    "Correio": { 
        texto: "Verificar o correio", 
        arte: "carta", 
        acao: () => {
            escreva("Você vai até a porta e olha a caixa de correio.", "yellow");
            escreva("[1] Abrir a caixa", "green");
            escreva("[2] Deixar para depois", "green");
            const escolha = leia("\nO que você faz? > ");
            if (escolha === "1") return "Dentro há apenas uma conta de luz vencida e um panfleto de pizzaria.";
            return "Você decide não olhar o correio agora.";
        }
    },
    "Martelo": { 
        acao: () => {
            const itensRequerido: string[] = ["Martelo"];

            const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
            });
            const itensID: number[] = itensRegistros.map(i => i.item_id);

            const temItens: boolean = temItensRequeridos(itensRegistros);

            if (!temItens) {
                escreva("\nVocê encontrou apenas alguns pregos e um martelo!\n", "magenta");
            
                let escolha = leia("Deseja pegá-lo? [s/n] ");
                if (escolha.toLowerCase() === "s") {

                    pegarItens(itensID);
                        
                    return "Você pegou o Martelo.";

                }
            } else {
                escreva("\nVocê pode guardar seu Martelo nesse pequeno caixote!\n", "magenta");

                let escolha = leia("Deseja guardá-lo? [s/n] ");
                if (escolha.toLowerCase() === "s") {

                    guardarItens(itensID);

                    return "Você guardou seu Martelo.";

                }
            }
        },
        usar: {
            "Cerca": () => {

                const itensRequerido: string[] = ["Martelo"];

                const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                    return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
                });

                const temItens: boolean = temItensRequeridos(itensRegistros);

                if (!temItens) {
                    return "Você precisa de Martelo e pregos para concertar essa cerca!\n";
                }

                return "Você concertou a cerca que estava quebrada!";
            }
        }
    },
    "Enxada": {
        acao: () => {
            const itensRequerido: string[] = ["Enxada"];

            const itensRegistros: ItemRetorno[] = itensRequerido.map(i => {
                return buscarItemPeloNome({item_nome: i})[0] as ItemRetorno;
            });
            const itensID: number[] = itensRegistros.map(i => i.item_id);

            const temItens: boolean = temItensRequeridos(itensRegistros);

            if (!temItens) {
                escreva("\nVocê encontrou uma velha Enxada!\n", "magenta");
            
                let escolha = leia("Deseja pegá-la? [s/n]");
                if (escolha.toLowerCase() === "s") {
                    pegarItens(itensID);
                    return "Você pegou a velha Enxada.";
                }
            } else {
                escreva("\nVocê pode guardar sua velha Enxada!\n", "magenta");

                let escolha = leia("Deseja guardar? [s/n]");
                if (escolha.toLowerCase() === "s") {
                    guardarItens(itensID);
                    return "Você guardou sua velha Enxada.";
                }
            }
        }
    }
}

export default itensJogo;
