import contaLogada from "../conta/contaLogada.ts";
import buscarItemPeloNome from "../db/item/buscarItemPeloNome.ts";
import type { RetornoLocalizacao } from "../db/localizacao/configLocalizacao.ts";
import listarLocalizacao from "../db/localizacao/listarLocalizacao.ts";
import buscarUsuarioItem from "../db/usuario_item/buscarUsuarioItem.ts";
import type { RetornoUsuarioItem } from "../db/usuario_item/configUsuarioItem.ts";
import itensJogo from "./itensJogo.ts";

// Servem como backup da mensagem anterior.
type TextoItem = { [nome: string]: string };
let textosItens: TextoItem = {};

/*
const localizacoesRegistros: RetornoLocalizacao[] = listarLocalizacao();
let localizacoes = localizacoesRegistros.map(l => l.loca_localizacao);
*/

function modificarTextos(): void {
    const items: string[] = Object.keys(itensJogo);

    items.forEach(itemNome => {
            if (itensJogo[itemNome]) {
                const item = itensJogo[itemNome];
                if (Object.keys(item).includes("texto")) {

                    // Se não existir um objeto de mesmo nome no backup, ele cria.
                    if (!Object.keys(textosItens).includes(itemNome)) {
                        textosItens[itemNome] = itensJogo[itemNome].texto!;
                    }

                    const usua_id: number = contaLogada.usua_id;
                    const item_id: number = buscarItemPeloNome({item_nome: itemNome})[0]?.item_id!;
                    // Verifica se o item está o invetório do jogador.
                    const itemRegistroInventario: RetornoUsuarioItem[] = buscarUsuarioItem({usua_id, item_id});

                    // Se tiver na bag
                    if (itemRegistroInventario.length !== 0) {
                        itensJogo[itemNome].texto = `Colocar a(o) ${ itemNome } no lugar.`;
                    } else {
                        const textoItemBackup: string = textosItens[itemNome]!;

                        itensJogo[itemNome].texto = textoItemBackup;
                    }
                }
            }
    })
}

export default modificarTextos;
