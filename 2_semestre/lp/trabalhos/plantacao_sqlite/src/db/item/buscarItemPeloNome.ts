import db from "../conexao.ts";

const sql: string = `
    SELECT * FROM item AS i WHERE i.item_nome = ?;
`;

type BuscarItemPeloNome = {
    item_nome: string
}

function buscarItemPeloNome(buscarItemPeloNome: BuscarItemPeloNome): unknown {
    const selecionar = db.prepare(sql);
    return selecionar.all(buscarItemPeloNome.item_nome);
}

export default buscarItemPeloNome;
