type ParametroBuscarUsuarioPeloEmail = {
    usua_email: string;
}

type RetornoBuscarUsuarioPeloEmail = {
    usua_id: number,
    usua_nome: string,
    usua_email: string
}

export type { 
    RetornoBuscarUsuarioPeloEmail,
    ParametroBuscarUsuarioPeloEmail
};
