import campos from "./campos.js";

function mudarStatusCampo(campo, novoStatus) {
    Object.keys(campos).forEach(c => {
        if (c == campo) {
            campos[c].situacao = novoStatus;
        }
    })
}

export default mudarStatusCampo;
