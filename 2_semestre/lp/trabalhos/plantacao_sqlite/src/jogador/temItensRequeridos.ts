import contaLogada from "../conta/contaLogada.ts";
import buscarItemPeloNome from "../db/item/buscarItemPeloNome.ts";
import buscarUsuarioItem from "../db/usuario_item/buscarUsuarioItem.ts";

type Item = {
    item_id: number,
    item_nome: string,
    item_descricao: string
}

function temItensRequeridos(nomesItens: string[]): boolean {
    return nomesItens.map(nome => {
        const itemLista = buscarItemPeloNome({item_nome: nome}) as Item[];
        if (itemLista.length !== 0) {
            const itemID: number = itemLista[0]!.item_id;

            const result = buscarUsuarioItem({usua_id: contaLogada.usua_id, item_id: itemID}) as unknown[];

            return result.length !== 0;
        }
        return  false;
    }).reduce((a, b) => a && b);
}

export default temItensRequeridos;
