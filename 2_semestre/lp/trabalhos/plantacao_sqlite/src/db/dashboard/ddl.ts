import db from "../conexao.ts";
import listarDashboard from "./listarDashboard.ts";
import criarDashboard from "./criarDashboard.ts";
import alterarDashboard from "./alterarDashboard.ts";

const sql: string = `
    CREATE TABLE IF NOT EXISTS dashboard (
        dash_qt_inicializacoes INTEGER NOT NULL DEFAULT 1
    );
`;

function exec(): void {
    db.exec(sql);

    // Verifica se é a primeira vez que o banco é criado
    if (listarDashboard().length === 0) {

        // Cria uma dashboard com inicalização igual a 1
        criarDashboard();
    } else {

        // Modifica o campo de inicalização para + 1
        alterarDashboard({operacao: 1});
    }
}

export default exec;
