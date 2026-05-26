import escreva from "./src/saida.js";
import leia from "./src/entrada.js";
import chalk from "chalk";

escreva(chalk.bgBlue("Comando de saída de dados..."));
let nome = leia(chalk.green("Comando para entrada de dados...Nome: "));

escreva("Seu nome é", nome);
