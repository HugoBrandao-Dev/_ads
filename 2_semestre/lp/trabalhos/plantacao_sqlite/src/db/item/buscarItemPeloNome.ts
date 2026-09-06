import db from "../conexao.ts";
import type { ItemParametro, ItemRetorno } from "./configItem.ts";

const sql: string = `
    SELECT * FROM item AS i WHERE i.item_nome = ?;
`;


function buscarItemPeloNome(buscarItemPeloNome: ItemParametro): ItemRetorno[] {
    const selecionar = db.prepare(sql);
    return selecionar.all(buscarItemPeloNome.item_nome) as ItemRetorno[];
}

export default buscarItemPeloNome;
