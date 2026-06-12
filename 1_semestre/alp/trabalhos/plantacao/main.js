import escreva from "./src/saida.js";
import leia from "./src/entrada.js";
import chalk from "chalk";

import { iniciarJogo } from "./sala.js";

escreva(chalk.bgBlue("Comando de saída de dados..."));
let nome = leia(chalk.green("Comando para entrada de dados...Nome: "));

escreva("Seja bem vindo a Fazenda", nome);

escreva(`
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

`);

// Inicia o loop de navegação do jogo contido em sala.js
iniciarJogo();
