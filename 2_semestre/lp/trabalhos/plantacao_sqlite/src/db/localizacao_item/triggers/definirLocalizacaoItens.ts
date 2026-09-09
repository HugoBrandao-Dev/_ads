import db from "../../conexao.ts";

const sqlTrigger: string = `
CREATE TRIGGER IF NOT EXISTS tg_definir_localizacao_item AFTER INSERT
ON usuario
BEGIN
    INSERT INTO usuario_localizacao_item
        (usua_id, loca_id, item_id, loit_qt_item)
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
END;
`;

function definirLocalizacaoItens() {
    db.exec(sqlTrigger);
}

export default definirLocalizacaoItens;
