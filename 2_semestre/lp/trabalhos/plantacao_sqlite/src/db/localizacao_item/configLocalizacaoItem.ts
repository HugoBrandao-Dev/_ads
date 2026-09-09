type ParametroLocalizacaoItem = {
    usua_id: number,
    loca_id: number,
    item_id: number,
    loit_qt_item?: number
}

type RetornoLocalizacaoItem = {
    usua_id: number,
    loca_id: number,
    item_id: number,
    loit_qt_item: number
}

export type {
    ParametroLocalizacaoItem,
    RetornoLocalizacaoItem
}
