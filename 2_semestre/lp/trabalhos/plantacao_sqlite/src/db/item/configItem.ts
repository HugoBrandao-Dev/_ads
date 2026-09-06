type ItemParametro = {
    item_nome: string
}

type ItemRetorno = {
    item_id: number,
    item_nome: string,
    item_descricao: string,
    item_pequeno: boolean
}

export type {
    ItemParametro,
    ItemRetorno
}