import chalk from "chalk";

export default function escreva(txt, estilo = "yellow") {
    console.log(chalk[estilo](txt));
}
