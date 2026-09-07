type RetornoLocalizacao = {
    loca_id: number,
    loca_localizacao: string,
    loca_descricao: string
}

type ParametroLocalizacaoPeloNome = {
    loca_localizacao: string
}

export type {
    ParametroLocalizacaoPeloNome,
    RetornoLocalizacao
}
