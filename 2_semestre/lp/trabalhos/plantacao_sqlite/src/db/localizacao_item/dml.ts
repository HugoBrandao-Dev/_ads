import db from "../conexao.ts";

const sql: string = `
    INSERT INTO localizacao_item
        (loca_id, item_id, loit_quantidade)
    VALUES
        (1, 5, 1),
        (3, 3, 1000),
        (3, 2, 50),
        (3, 9, 1),
        (3, 6, 1000000),
        (3, 10, 1),
        (5, 1, 25),
        (1, 8, 1),
        (2, 7, 1),
        (2, 4, 1);
`;

/*
-> Casa 1
Vassoura 5
Jornal 8

-> Celeiro 2
Martelo 7
Enxada 4

-> Horta 3
Minhoca 3
Regador 9
Balde 10
Água 6

-> Pasto 02 5
Maçã 1

*/

function exec() {
    db.exec(sql);
}

export default exec;