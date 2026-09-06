import db from "../conexao.ts";

const sql: string = `
    INSERT INTO localizacao_item
        (loca_id, item_id, loit_quantidade)
    VALUES
        (1, 5, 1),
        (3, 3, 1000),
        (3, 2, 50),
        (6, 9, 1),
        (7, 6, 1000000),
        (7, 10, 1),
        (8, 1, 25),
        (9, 8, 1),
        (11, 7, 1),
        (12, 4, 1);
`;

function exec() {
    db.exec(sql);
}

export default exec;