import db from "../conexao.ts";
import listarDashboard from "./listarDashboard.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS dashboard (
        dash_qt_inicializacoes INTEGER NOT NULL DEFAULT 1
    );
`;

function exec(): void {
    db.exec(sql);
    console.log(listarDashboard());
}

export default exec;
