import db from "../conexao.ts";

const sql: string = `
    SELECT * FROM dashboard;
`;

function listarDashboard(): unknown {
    const select = db.prepare(sql);
    return select.all();
}

export default listarDashboard;
