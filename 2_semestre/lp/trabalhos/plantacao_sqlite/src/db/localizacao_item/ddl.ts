import db from "../conexao.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS localizacao_item
        (
        loca_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL,
        loit_quantidade INTEGER DEFAULT 1,

        CONSTRAINT fk_localizacao_id FOREIGN KEY (loca_id) REFERENCES localizacao(loca_id),
        CONSTRAINT fk_item_id FOREIGN KEY (item_id) REFERENCES item(item_id),
        CONSTRAINT pk_localizacao_item PRIMARY KEY (loca_id, item_id)
        );
`;

function exec(): void {
    db.exec(sql);
}

export default exec;
