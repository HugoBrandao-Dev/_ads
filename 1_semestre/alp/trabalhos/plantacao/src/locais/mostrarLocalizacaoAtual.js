import locais from "./locais.js";
import escreva from "../saida.js";

export default function mostrarLocAtual() {
    escreva('='.repeat(40));
    escreva(`Você está na ${ locais.espaco.toLocaleUpperCase() }`);
    escreva(`Mais precisamente no(a) ${ locais.local.toLocaleLowerCase() }`);
    escreva('='.repeat(40));
}