import tabelaUsuario from "./usuario/ddl.ts";
import tabelaItem from "./item/ddl.ts";
import tabelaLocalizacao from "./localizacao/ddl.ts";

function initTabelas(): void {
    tabelaUsuario();
    tabelaItem();
    tabelaLocalizacao();
}

export default initTabelas;
