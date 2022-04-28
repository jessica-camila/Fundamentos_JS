class Negociacao {
    
    constructor(data, quantidade, valor) {

            this._data = new Date(data.getTime());
            this._quantidade = quantidade;
            this._valor = valor;
            Object.freeze(this) // congela o objeto para que não seja alterado (pelo menos de forma direta)
    }

    // metodos para acessar os valores os atributos privados
    //getVolume() {
      //  return this._quantidade*this._valor
    //}

    //getData() {
      //  return this._data;
    //}

    //getQuantidade() {
      //  return this._quantidade;
    //}

    //getValor() {
      //  return this._valor;
    //}

    // utilizando get para acessar como propriedade os valores privados dos atributos
    get volume() {
        return this._quantidade*this._valor
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}

