//Essa classe deve ser abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Objeto instanciado como tipo 'Conta' (classe abstrata).");
        }// Para evitar que seja instanciado um obejto de uma classe abstrata;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){ // Bloco de comando para permitir que a propriedade "_cliente" receba apenas instancias da classe "Cliente". Obs. Isso não é um método, é um acessor;
        if(novoValor instanceof Cliente){ // Se novoValor for uma instancia da classe "Cliente";
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

    sacar(valor){ // Método Abstrato
        throw new Error("O método Sacar da conta é abstrato, você precisa sobrescrever esse método");
    }

    _sacar(valor, taxa){ // Estrutura para definir um método/função em uma classe;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        
        this._saldo += valor;
    }

    transferir(valor, contaDestino){
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}