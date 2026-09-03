/*

INVETÁRIO DO JOGADOR

*/

import db from "../conexao.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS usuario_item
        (
        usua_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL,
        usit_quantidade INTEGER NOT NULL DEFAULT 1,

        CONSTRAINT fk_usuario_id FOREIGN KEY (usua_id) REFERENCES usuario(usua_id),
        CONSTRAINT fk_item_id FOREIGN KEY (item_id) REFERENCES item(item_id),
        CONSTRAINT pk_us_item PRIMARY KEY (usua_id, item_id)
        );
`;

function exec(): void {
    db.exec(sql);
}

export default exec;
