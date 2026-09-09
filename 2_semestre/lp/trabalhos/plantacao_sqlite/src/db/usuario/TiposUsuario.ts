type UsuarioDDL = {
    usua_id: number,
    usua_nome: string,
    usua_email: string,
    usua_usuario: string,
    usua_senha: string
}

type ParametroBuscarUsuarioPeloEmail = {
    usua_email: string;
}

type RetornoBuscarUsuarioPeloEmail = {
    usua_id: number,
    usua_nome: string,
    usua_email: string
}

type ParametroFazerLogin = {
    usua_usuario: string,
    usua_senha: string,
}

type RetornoFazerLogin = {
    usua_id: number,
    usua_nome: string,
}

export type { 
    UsuarioDDL,
    RetornoBuscarUsuarioPeloEmail,
    ParametroBuscarUsuarioPeloEmail,
    ParametroFazerLogin,
    RetornoFazerLogin
};
