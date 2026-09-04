import escreva from "./src/saida.js";
import leia from "./src/entrada.js";
import initTabelas from "./src/db/initTabelas.ts";
import { iniciarJogo } from "./main.js";
import telaLogin from "./src/conta/telaLogin.ts";
import contaLogada from "./src/conta/contaLogada.ts";
import teste from "./src/temp/teste.ts";

initTabelas();

escreva("=== Inicializando o Jogo ===", "bgBlue");

teste();
telaLogin();

if (contaLogada.usua_id !== 0) {

escreva(`\nSeja bem-vindo(a) à Fazenda, ${ contaLogada.usua_nome }!`);
escreva("Navegue pelos ambientes usando os números das opções.\n");

escreva("=== A SUA HISTÓRIA ===", "magenta");
escreva("Você acaba de chegar à antiga fazenda da sua família.", "white");
escreva("Por muitos anos, este lugar foi cheio de vida, plantações férteis e animais felizes.", "white");
escreva("Porém, o tempo passou e a propriedade acabou ficando coberta de poeira e mato.", "white");
escreva("Agora, sua grande missão é explorar cada canto, encontrar ferramentas esquecidas,", "white");
escreva("cuidar da terra e trazer a antiga glória desta fazenda de volta à vida!\n", "yellow");

escreva(`
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`);

leia("\nPressione ENTER para começar...", "cyan");

await iniciarJogo();

}