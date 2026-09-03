import tabelaUsuario from "./usuario/ddl.ts";
import tabelaItem from "./item/ddl.ts";

function initTabelas(): void {
    tabelaUsuario();
    tabelaItem();
}

export default initTabelas;
