import { Cliente } from "./Cliente.js"; // import = Para importar uma classe de um outro arquivo, essa classe precisa ser exportada para poder ser importada;
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo, 10000, 12332112300");
diretor.cadastrarSenha("pass123");
const gerente = new Gerente("Andressa, 5000, 12355422300");
gerente.cadastrarSenha("pass123");
const cliente = new Cliente("Beatriz", 22211133300, "pass123");

const logadoDiretor = SistemaAutenticacao.login(diretor, "pass123");
const logadoGerente = SistemaAutenticacao.login(gerente, "pass123");
const logadoCliente = SistemaAutenticacao.login(cliente, "pass123");

console.log("Diretor Logado: ", logadoDiretor);
console.log("Gerente Logado: ", logadoGerente);
console.log("Cliente Logado: ", logadoCliente);
