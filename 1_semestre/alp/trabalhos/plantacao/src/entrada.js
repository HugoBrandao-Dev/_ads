import chalk from "chalk";
import PromptSync from "prompt-sync";

let prompt = PromptSync();

export default function entrada(txt, estilo = "red") {
    return prompt(chalk[estilo](txt));
}
