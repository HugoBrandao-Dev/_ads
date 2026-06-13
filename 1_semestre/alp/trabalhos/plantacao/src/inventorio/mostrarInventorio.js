import escreva from "../saida.js";
import inventorio from "./inventorio.js"

export default function mostrar() {
    escreva("\nINVENTÓRIO:");
    inventorio.forEach(i => escreva(`[ ${ i } ]`))
}