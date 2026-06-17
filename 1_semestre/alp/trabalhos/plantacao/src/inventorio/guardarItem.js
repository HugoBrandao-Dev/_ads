import inventorio from "./inventorio.js";
import { ambientes } from "../../ambientes/index.js";

export default function guardar(item, local) {
    inventorio.slice(inventorio.indexOf(item), 1);
    ambientes[local].items.push(item);
}
