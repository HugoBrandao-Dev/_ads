
import db from "../conexao.ts";

const sql: string = `
    INSERT INTO localizacao
        (loca_localizacao, loca_descricao)
    VALUES
        ('Casa Grande', 'Edificação principal da fazenda, destinada à moradia dos proprietários e recepção de hóspedes'),
        ('Celeiro', 'Estrutura coberta utilizada para armazenar colheitas, suprimentos, ferramentas e abrigar animais'),
        ('Horta', 'Área destinada ao cultivo de hortaliças, legumes, ervas aromáticas e temperos para consumo'),
        ('Pasto 1', 'Área de pastagem delimitada, coberta por vegetação destinada à alimentação e ao manejo do gado'),
        ('Pasto 2', 'Setor secundário de pastagem para rotação do rebanho e conservação do solo');
`

const sqlLocaisPontais: string = `
    INSERT INTO localizacao
        (loca_localizacao, loca_descricao)
    VALUES
        ('Porteira', 'Estrutura de madeira ou metal usada para delimitar e controlar o acesso a entradas, pastos e cercados'),
        ('Torneira', 'Dispositivo de controle do fluxo de água instalado em pontos estratégicos para irrigação, limpeza e consumo'),
        ('Macieira', 'Árvore frutífera cultivada no pomar para a produção e colheita de maçãs'),
        ('Lareira', 'Estrutura de alvenaria destinada ao acendimento de fogo para aquecimento do ambiente e conforto térmico');
`;

const sqlMoveis: string = `
    INSERT INTO localizacao
        (loca_localizacao, loca_descricao)
    VALUES
        ('Caixote pequeno', 'Recipiente compacto de madeira ou plástico utilizado para o transporte e armazenamento de pequenos suprimentos ou ferramentas'),
        ('Caixote grande', 'Recipiente de grande porte adequado para o acondicionamento, organização e transporte de colheitas volumosas ou equipamentos');
`;

function exec() {
    db.exec(sql);
    db.exec(sqlLocaisPontais);
    db.exec(sqlMoveis);
}

export default exec;
