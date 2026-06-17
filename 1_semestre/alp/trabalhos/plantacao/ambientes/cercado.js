export default {
    texto: "Você chegou ao Cercado principal da fazenda. Algumas vacas olham para você com curiosidade.",
    opcoes: {
        "1": { texto: "Voltar para o Pasto 01", destino: "Pasto01" },
        "2": { texto: "Verificar o cocho de água", arte: "gota", acao: () => "O cocho está quase vazio. Os animais parecem estar com sede." },
        "3": { texto: "Tentar consertar a cerca", arte: "martelo", acao: () => "Uma parte da cerca está quebrada. Você tenta um reparo improvisado, mas vai precisar de ferramentas." }
    }
};