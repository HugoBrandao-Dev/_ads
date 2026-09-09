import db from "../conexao.ts";
import localizacaoItemDML from "./dml.ts";
import listarDashboard from "../dashboard/listarDashboard.ts";
import definirLocalizacaoItens from "./triggers/definirLocalizacaoItens.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS usuario_localizacao_item
        (
        usua_id INTEGER NOT NULL,
        loca_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL,
        loit_qt_item INTEGER DEFAULT 1,

        CONSTRAINT fk_usuario_id FOREIGN KEY (usua_id) REFERENCES usuario(usua_id),
        CONSTRAINT fk_localizacao_id FOREIGN KEY (loca_id) REFERENCES localizacao(loca_id),
        CONSTRAINT fk_item_id FOREIGN KEY (item_id) REFERENCES item(item_id),
        CONSTRAINT pk_localizacao_item PRIMARY KEY (usua_id, loca_id, item_id)
        );
`;

type ListaDashboard = {
    dash_qt_inicializacoes?: number
}

function exec(): void {
    db.exec(sql);
    definirLocalizacaoItens();
}

export default exec;
