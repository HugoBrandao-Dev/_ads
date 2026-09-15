# 🌾 Plantação (SQLite Edition)

   Jogo de aventura em texto (text adventure), executado no terminal, onde o jogador assume o controle de uma antiga fazenda da família. O objetivo é explorar os ambientes, recuperar itens esquecidos, cuidar da terra e restaurar a propriedade à sua antiga glória.

Esta versão evolui o projeto original do 1º semestre adicionando **persistência em banco de dados SQLite**, com sistema de **conta de usuário** (cadastro/login) e **inventário** salvo entre sessões.

## Descrição
<img width="1944" height="1104" alt="image" src="https://github.com/user-attachments/assets/aa3c878a-6aad-482d-9aea-6f16bfb3d4b6" />


O jogo simula uma propriedade rural contendo uma residência, celeiro, horta, pastos e campos de plantação. O jogador navega entre esses ambientes usando um menu numérico, interage com objetos (ferramentas, plantações, animais), coleta itens para o inventário e usa esses itens para desbloquear novas ações (ex: usar a Enxada na Grama, o Regador nos Tomates, o Martelo na Cerca).

## Funcionalidades

- **Sistema de conta**: cadastro e login de usuário, com senha protegida via `bcrypt` e validação de dados via `validator`.
- **Navegação por ambientes**: Casa, Celeiro, Horta, Pasto 01, Pasto 02 e Cercado, exibidos em um mapa ASCII interativo.
- **Interação com itens**: pegar, guardar, comer e usar itens em combinação com outros objetos do cenário.
- **Inventário persistente**: os itens do jogador são salvos no banco de dados SQLite e recuperados entre sessões.
- **Campos de plantação**: áreas com estado próprio (irrigado, cultura plantada, pronto para colher).
- **Artes ASCII**: ilustrações em texto para itens e cenas do jogo.
- **Saída colorida no terminal** via `chalk`, para destacar textos, opções e diálogos.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) (ES Modules)
- [TypeScript](https://www.typescriptlang.org/) (executado via `tsx`, misto com arquivos `.js`)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) — banco de dados SQLite
- [bcrypt](https://www.npmjs.com/package/bcrypt) — hash de senhas
- [validator](https://www.npmjs.com/package/validator) — validação de dados de cadastro
- [inquirer](https://www.npmjs.com/package/inquirer) / [enquirer](https://www.npmjs.com/package/enquirer) — menus interativos
- [chalk](https://www.npmjs.com/package/chalk) — cores no terminal
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) — leitura de entrada síncrona

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão compatível com ES Modules e `better-sqlite3`)

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o jogo:
   ```bash
   npm start
   ```

Na primeira execução, as tabelas do banco de dados são criadas automaticamente (`plantacao.db`, ignorado pelo Git). Em seguida, cadastre uma conta ou faça login para começar a jogar.

## Como jogar

- Ao iniciar, escolha entre **Logar**, **Cadastrar** ou **Sair** no menu inicial.
- Dentro do jogo, digite o número correspondente a cada opção exibida.
- `[1]` sempre abre o mapa para trocar de ambiente.
- As demais opções numeradas representam ações disponíveis no ambiente atual (examinar, pegar, usar itens, etc.).
- Digite `sair` a qualquer momento para encerrar o jogo.


## Mapa do jogo 

                    [ CASA ]
              (sala de estar, lareira,
                correio, vassoura)
                       │
                       │
                  [ CELEIRO ]
              (caixotes, feno, baias)
                    ╱       ╲
                   ╱         ╲
          [ PASTO 01 ]     [ HORTA ]
        (grama, chamar        │ (tomates, minhocas,
           animais)           │  ervas, espantalho)
              │                │
              │                │
        [ CERCADO ]      [ PASTO 02 ]
       (cocho d'água,   (árvores, sombra,
        consertar cerca)    macieira)



## Estrutura do projeto

```
plantacao_sqlite/
├── ambientes/          # Definição de cada ambiente (casa, celeiro, horta, pastos, cercado)
├── src/
│   ├── campos/         # Estado e ações dos campos de plantação
│   ├── comodos/        # Estado e ações dos cômodos da casa
│   ├── conta/          # Fluxo de login, cadastro e sessão do usuário
│   ├── db/              # Conexão SQLite, DDL/DML de usuário, item, localização e inventário
│   ├── inventorio/      # Exibição e manipulação do inventário do jogador
│   ├── items/           # Itens do jogo e suas ações/interações
│   ├── jogador/          # Ações do jogador (pegar, guardar, comer itens)
│   └── locais/           # Navegação e posição atual do jogador
├── main.js               # Loop principal do jogo
├── teladeboasvindas.js    # Ponto de entrada (tela de boas-vindas e login)
└── tsconfig.json
```

## Autores

Trabalho acadêmico desenvolvido para a disciplina de Linguagem de Programação (LP).
