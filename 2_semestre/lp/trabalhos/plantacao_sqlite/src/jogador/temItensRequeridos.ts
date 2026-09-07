import contaLogada from "../conta/contaLogada.ts";
import buscarItemPeloNome from "../db/item/buscarItemPeloNome.ts";
import type { ItemRetorno } from "../db/item/configItem.ts";
import buscarUsuarioItem from "../db/usuario_item/buscarUsuarioItem.ts";

function temItensRequeridos(itens: ItemRetorno[]): boolean {
    return itens.map(itemRegistro => {
        const resultItemRetorno: ItemRetorno[] = buscarItemPeloNome({item_nome: itemRegistro.item_nome});

        if (resultItemRetorno.length !== 0) {
            const item: ItemRetorno = resultItemRetorno[0]!;
            const result = buscarUsuarioItem({usua_id: contaLogada.usua_id, item_id: item.item_id}) as ItemRetorno[];

            return result.length !== 0;
        }
        return  false;
    }).reduce((a, b) => a && b);
}

export default temItensRequeridos;
