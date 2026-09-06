import db from "../conexao.ts";

const sql: string = `
    INSERT INTO dashboard (dash_qt_inicializacoes) VALUES (1);
`;

function criarDashboard(): void {
    db.exec(sql);
}

export default criarDashboard;
