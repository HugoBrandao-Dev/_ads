import campos from "./campos";

function mudarStatusCampo(campo, novoStatus) {
    campos.forEach(c => {
        if (c == campo) {
            c.situacao = novoStatus;
        }
    })
}

export default mudarStatusCampo;
