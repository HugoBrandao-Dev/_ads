/*
import db from "../conexao.ts";

const sqlEstrutura: string = `
    INSERT INTO 
        item(item_nome, item_descricao) 
    VALUES 
        (?, ?);
`

type Item = {
    item_nome: string,
    item_descricao: string
}

const sqlValores: Item[] = [
    { item_nome: "Maçã", item_descricao: "Fruta doce ou levemente ácida, de polpa suculenta e casca vermelha ou verde"},
    { item_nome: "Tomate", item_descricao: "Fruto botânico de cor vermelha, muito utilizado em saladas e molhos"},
    { item_nome: "Minhoca", item_descricao: "Anelídeo que vive no solo, importante para o arejamento e fertilidade da terra"},
    { item_nome: "Carta", item_descricao: "Correspondência escrita enviada a alguém para transmitir uma mensagem"},
    { item_nome: "Enxada", item_descricao: "Ferramenta agrícola usada para capinar, cavar ou mover a terra"},
    { item_nome: "Vassoura", item_descricao: "Utensílio doméstico composto por um cabo e cerdas, usado para varrer"},
    { item_nome: "Gota", item_descricao: "Pequena porção esférica de um líquido que cai ou se forma em uma superfície"},
    { item_nome: "Martelo", item_descricao: "Ferramenta com cabeça de metal usada para golpear, pregar ou quebrar objetos"},
    { item_nome: "Jornal", item_descricao: "Publicação impressa ou digital com notícias, artigos e informações periódicas"},
    { item_nome: "Regador", item_descricao: "Recipiente com um bico perfurado usado para molhar plantas e jardins"},
    { item_nome: "Balde", item_descricao: "Recipiente fundo com alça, usado para transportar ou armazenar líquidos e objetos"}
]

function exec() {
    const inserir = db.prepare(sqlEstrutura);

    sqlValores.forEach(i => {
        if (inserir.run(i.item_nome, i.item_descricao).lastInsertRowid !== 0) {
            console.log("Itens criados com sucesso");
        } else {
            throw new Error ("Erro no cadastro de itens");
        }
    })
}
export default exec;
*/

import db from "../conexao.ts";

const sql: string = `
    INSERT INTO item
        (item_nome, item_descricao)
    VALUES
        ('Maçã', 'Fruta doce ou levemente ácida, de polpa suculenta e casca vermelha ou verde'),
        ('Tomate', 'Fruto botânico de cor vermelha, muito utilizado em saladas e molhos'),
        ('Minhoca', 'Anelídeo que vive no solo, importante para o arejamento e fertilidade da terra'),
        ('Carta', 'Correspondência escrita enviada a alguém para transmitir uma mensagem'),
        ('Enxada', 'Ferramenta agrícola usada para capinar, cavar ou mover a terra'),
        ('Vassoura', 'Utensílio doméstico composto por um cabo e cerdas, usado para varrer'),
        ('Gota', 'Pequena porção esférica de um líquido que cai ou se forma em uma superfície'),
        ('Martelo', 'Ferramenta com cabeça de metal usada para golpear, pregar ou quebrar objetos'),
        ('Jornal', 'Publicação impressa ou digital com notícias, artigos e informações periódicas'),
        ('Regador', 'Recipiente com um bico perfurado usado para molhar plantas e jardins'),
        ('Balde', 'Recipiente fundo com alça, usado para transportar ou armazenar líquidos e objetos');
`


function exec() {
    db.exec(sql);
}

export default exec;
