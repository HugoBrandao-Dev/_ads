import db from "../conexao.ts";
import localizacaoDML from "./dml.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS localizacao(
        loca_id INTEGER PRIMARY KEY NOT NULL,
        loca_localizacao VARCHAR(100) NOT NULL,
        loca_descricao VARCHAR(255) NOT NULL
    );
`

function exec(): void {
    db.exec(sql);
    // localizacaoDML();
}
export default exec;
