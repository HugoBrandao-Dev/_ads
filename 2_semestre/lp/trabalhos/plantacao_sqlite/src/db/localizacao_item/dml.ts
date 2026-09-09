import db from "../conexao.ts";

`
DELIMITER $$
CREATE TRIGGER IF NOT EXISTS tg_definir_localizacao_item AFTER INSERT
ON usuario
BEGIN
    INSERT INTO usuario_localizacao_item
        (loca_id, item_id, loit_qt_item)
    VALUES
        (NEW.usua_id, 1, 5, 1),
        (NEW.usua_id, 3, 3, 1000),
        (NEW.usua_id, 3, 2, 50),
        (NEW.usua_id, 3, 9, 1),
        (NEW.usua_id, 3, 6, 1000000),
        (NEW.usua_id, 3, 10, 1),
        (NEW.usua_id, 5, 1, 25),
        (NEW.usua_id, 1, 8, 1),
        (NEW.usua_id, 2, 7, 1),
        (NEW.usua_id, 2, 4, 1);
END $$
DELIMITER ;
`;

const sql: string = `
    INSERT INTO localizacao_item
        (loca_id, item_id, loit_qt_item)
    VALUES
        (?, 1, 5, 1),
        (?, 3, 3, 1000),
        (?, 3, 2, 50),
        (?, 3, 9, 1),
        (?, 3, 6, 1000000),
        (?, 3, 10, 1),
        (?, 5, 1, 25),
        (?, 1, 8, 1),
        (?, 2, 7, 1),
        (?, 2, 4, 1);
`;

function exec(usua_id: number) {
    const inserir = db.prepare(sql);
    inserir.run(usua_id);
}

export default exec;