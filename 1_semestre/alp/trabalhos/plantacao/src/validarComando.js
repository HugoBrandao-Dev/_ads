import carregarComandosPossiveis from "./carregarComandosPossiveis.js";

export default function validar(comando) {
    if (carregarComandosPossiveis().acoes.includes(comando)) {
        return true;
    }
    return false;
}
