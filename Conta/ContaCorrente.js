// Todo arquivo que iniciar com letra maiúscula, se refere a um arquivo de class;
import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta{ // Estrutura para definir uma classe e seus argumentos e métodos; // 'extends Conta' Cria uma herança da classe conta. Usará tudo que tem na classe conta;
    static numeroContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);// Irá chamar o construtor da classe Conta. Para chamar o construtor Pai, precisa ser chamado de dentro de um construtor filho de uma classe extendida;
        //this._saldo = 0; // Argumentos com underline antes do nome é para informar que o atributo deve ser tratado como privado, só pode ser manipulado dentro dessa classe;
        ContaCorrente.numeroContas++;
    }

    sacar(valor){ // Estrutura para difinir um método/função em uma classe; // Sobreescrevendo o método sacar da classe mãe;
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}