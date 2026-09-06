import db from "../conexao.ts";

const sql: string = `
    INSERT INTO item
        (item_nome, item_descricao, item_pequeno)
    VALUES
        ('Maçã', 'Fruta doce ou levemente ácida, de polpa suculenta e casca vermelha ou verde', '1'),
        ('Tomate', 'Fruto botânico de cor vermelha, muito utilizado em saladas e molhos', '1'),
        ('Minhoca', 'Anelídeo que vive no solo, importante para o arejamento e fertilidade da terra', '1'),
        ('Enxada', 'Ferramenta agrícola usada para capinar, cavar ou mover a terra', '0'),
        ('Vassoura', 'Utensílio doméstico composto por um cabo e cerdas, usado para varrer', '0'),
        ('Água', 'líquido natural e transparente que não tem cheiro, cor ou gosto, sendo a substância mais importante para a existência de vida na Terra', '0'),
        ('Martelo', 'Ferramenta com cabeça de metal usada para golpear, pregar ou quebrar objetos', '1'),
        ('Jornal', 'Publicação impressa ou digital com notícias, artigos e informações periódicas', '1'),
        ('Regador', 'Recipiente com um bico perfurado usado para molhar plantas e jardins', '0'),
        ('Balde', 'Recipiente fundo com alça, usado para transportar ou armazenar líquidos e objetos', '0');
`

function exec() {
    db.exec(sql);
}

export default exec;
