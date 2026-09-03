import db from "../conexao.ts";
import itemDML from "./dml.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS item(
        item_id INTEGER PRIMARY KEY NOT NULL,
        item_nome VARCHAR(100) NOT NULL,
        item_descricao VARCHAR(255) NOT NULL
    );
`

function exec() {
    db.exec(sql);
    itemDML();
}
export default exec;
