import db from "../conexao.ts";
import listarDashboard from "./listarDashboard.ts";
import criarDashboard from "./criarDashboard.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS dashboard (
        dash_qt_inicializacoes INTEGER NOT NULL DEFAULT 1
    );
`;

function exec(): void {
    db.exec(sql);
    if (listarDashboard().length === 0) {
        criarDashboard();
    }
}

export default exec;
