import db from "../conexao.ts";
import itemDML from "./dml.ts";
import listarItem from './listarItem.ts';

const sql: string = `
    CREATE TABLE IF NOT EXISTS item(
        item_id INTEGER PRIMARY KEY NOT NULL,
        item_nome VARCHAR(100) NOT NULL,
        item_descricao VARCHAR(255) NOT NULL
    );
`

function exec() {
    db.exec(sql);

    // Cria os itens padrão somente se a tabela item estiver vazia.
    if (listarItem().length === 0) {

        // Os itens padrão são inseridos
        itemDML();
    }
}
export default exec;
