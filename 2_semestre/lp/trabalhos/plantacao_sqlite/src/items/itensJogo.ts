import escreva from "../saida.js";
import leia from "../entrada.js";
import temItensRequeridos from "../jogador/temItensRequeridos.ts";

const itensJogo: object = {
    "Vassoura": { 
        texto: "Há uma vassoura perto da porta", arte: "vassoura", 
        acao: () => {
            const itensRequerido: string[] = ["Vassoura"];

            const temItens: boolean = temItensRequeridos(itensRequerido);

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
