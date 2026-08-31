import db from "../conexao.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS usuario(
        usua_id INTEGER PRIMARY KEY NOT NULL,
        usua_nome VARCHAR(100) NOT NULL,
        usua_email VARCHAR(100) NOT NULL,
        usua_usuario VARCHAR(25) NOT NULL,
        usua_senha VARCHAR(50) NOT NULL
    );
`

function exec() {
    db.exec((sql));
}
export default exec();
