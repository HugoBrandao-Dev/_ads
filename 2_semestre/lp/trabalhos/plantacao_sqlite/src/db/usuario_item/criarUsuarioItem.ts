import db from "../conexao.ts";

type UsuarioItem = {
    usua_id: number,
    item_id: number,
    usit_quantidade?: number | 1
}

// 
function prepararSQL(usuarioItem: UsuarioItem): string {
    const campos: string[] = Object.keys(usuarioItem);

    let camposSQL: string = "";
    camposSQL += campos[0] ? "usua_id" : "";
    camposSQL += campos[1] ? ", item_id" : "";
    camposSQL += campos[2] ? ", usit_quantidade" : "";

    let valoresSQL: string = "?";
    valoresSQL += ", ?".repeat(campos.length - 1);

    const result: string = `
        INSERT INTO usuario_item (${ camposSQL }) VALUES (${ valoresSQL });
    `;

    return result
}

function criarUsuarioItem(usuarioItem: UsuarioItem): unknown {
    const sql: string = prepararSQL(usuarioItem);
    const inserir = db.prepare(sql);
    return inserir.run(Object.values(usuarioItem)).lastInsertRowid;
}

export default criarUsuarioItem;
