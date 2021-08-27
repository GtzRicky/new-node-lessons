import path, {dirname} from "path";
import { fileURLToPath  } from "url";
import res, { sum } from "./math.js"; //De esta forma ya se importan y exportan archivos js conforme ECMA Script Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(path.resolve("package.json"));
console.log(sum(3, 4));
console.log(res(10, 3));
console.log("hello world");
console.log(__filename, __dirname);

