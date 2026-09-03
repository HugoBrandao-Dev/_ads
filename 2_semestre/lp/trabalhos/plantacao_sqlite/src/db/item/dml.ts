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
