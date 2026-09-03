
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

function exec() {
    db.exec(sql);
}

export default exec;
