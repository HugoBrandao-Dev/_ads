import { AsyncLocalStorage } from "node:async_hooks";
import db from "../conexao.ts";

function prepararSQL(operacao: number): string {
    const operacaoSQL: string = operacao > 0 ? `+ ${ operacao }` : `- ${ Math.abs(operacao) }`;

    const sql: string = `
        UPDATE dashboard
        SET dash_qt_inicializacoes = dash_qt_inicializacoes ${ operacaoSQL };
    `;

    return sql;
}

type AlterarDashboard = {
    operacao: number
}

function alterarDashboard(alterarDashboard: AlterarDashboard): unknown {
    const sql: string = prepararSQL(alterarDashboard.operacao);
    console.log(sql);

    const alterar = db.prepare(sql);

    return alterar.run();
}

export default alterarDashboard;
