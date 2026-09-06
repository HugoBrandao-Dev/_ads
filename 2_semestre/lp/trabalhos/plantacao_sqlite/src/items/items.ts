import contaLogada from "../conta/contaLogada.ts";
import buscarUsuarioItem from "../db/usuario_item/buscarUsuarioItem.ts";



const items: object = {
    "Vassoura": { 
        texto: "Há uma vassoura perto da porta", arte: "vassoura", 
        acao: () => {
            const itemRequirido: number = 

            const temItem: boolean = buscarUsuarioItem({usua_id: contaLogada.usua_id, item_id})

            if (!buscar("vassoura")) {
                escreva("\nVocê encontrou uma Vassoura!\n", "magenta");
            
                let escolha = leia("Deseja pegá-lo? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    if (pegar("vassoura")) {
                        return "Você pegou a Vassoura.";
                    }
                    return "";
                }
            } else {
                escreva("\nVocê está carregando uma vassoura o tempo todo...\n", "magenta");

                let escolha = leia("Deseja colocar a vassoura perto da porta? [s/n] ");
                if (escolha.toLowerCase() === "s") {
                    guardar("vassoura", localAtual);
                    return "Você colocou a Vassoura perto da porta.";
                }
            }

            return "Você apenas olhou a vassoura e não fez nada!!!";
        } 
    }
}