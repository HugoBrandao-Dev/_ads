import db from "../conexao.ts";

type Item = {
    item_nome: string,
    item_descricao: string
}

const sql: string = `
    SELECT 
        i.item_nome, 
        i.item_descricao 
    FROM item AS i;
`

function exec(): Item[] {
    const selectItem = db.prepare(sql);
    
    const result = selectItem.all() as Item[];

    return result;
}

export default exec;
