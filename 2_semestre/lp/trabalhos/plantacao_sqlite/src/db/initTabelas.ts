import tabelaUsuario from "./usuario/ddl.ts";
import tabelaItem from "./item/ddl.ts";
import tabelaLocalizacao from "./localizacao/ddl.ts";

// Inventário do jogador
import tabelaUsuarioItem from "./usuario_item/ddl.ts";

function initTabelas(): void {
    tabelaUsuario();
    tabelaItem();
    tabelaLocalizacao();
    tabelaUsuarioItem();
}

export default initTabelas;
