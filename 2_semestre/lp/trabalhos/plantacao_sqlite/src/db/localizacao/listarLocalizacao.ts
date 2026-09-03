import db from "../conexao.ts";

type Localizacao = {
    item_nome: string,
    item_descricao: string
}

const sql: string = `
    SELECT 
        l.loca_localizacao, 
        l.loca_descricao 
    FROM localizacao AS l;
`

function exec(): Localizacao[] {
    const selectItem = db.prepare(sql);
    
    const result = selectItem.all() as Localizacao[];

    return result;
}

export default exec;
