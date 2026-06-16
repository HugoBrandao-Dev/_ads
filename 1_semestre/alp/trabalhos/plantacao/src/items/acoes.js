import locais from "../locais/locais.js";
import mudarStatusCampo from "../campos/mudarStatusCampo.js";

let acoes = {
    "arado": {
        arar: () => {
            if (locais.espaco == "campo") {

                // Arado com sucesso;
                mudarStatusCampo(locais.local, "arado");
                return true;
            }

            // Local inválido para arar.
            return false;
        }
    },
    "enchada": {
        capinar: () => {
            if (locais.espaco == "campo") {
                mudarStatusCampo(locais.local, "capinado");
                return true;
            }

            return false;
        }
    },
    "chave 1": {
        abrir: () => {
            if (locais.espaco == "casa" && locais.local == "sala de estar") {
                mudarStatusCasa(locais.local, "porta da entrada", true);
                return true;
            }
            return false;
        }
    }
}

export default acoes;
