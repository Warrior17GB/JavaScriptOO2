// Todo arquivo que iniciar com letra maiúscula, se refere a um arquivo de class;
export class Cliente{ // export = Exportar essa plasse para outros arquivos poderem usar;

    //nome;
    //_cpf;
    //As variáveis nome e _cpf foram apagadas poís é uma boa prática declarar e inicializar as propriedades de uma classe em um método/construtor dessa mesma class;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){ // Construtor de classe;
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}
