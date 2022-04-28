class NegociacaoController {
    
    constructor () {
                                      // mantem associado o querySelector ao document
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        
    }        
        
    // this._inputData.value retorna um string

    adiciona(event) {
        
        event.preventDefault();
        
        // let data = new Date(...
        //     this._inputData.value
        //         .split('-')
        //         .map((item,indice) => item - indice % 2)
        // );
        
        // let helper = new DateHelper(); posso acesar direto um método da classe, sem precisar criar uma instância... 
        // ver métodos estáticos, faremos isso abaixo
        
        // let diaMesAno = negociacao.data.getDate()
        // +'/'+ (negociacao.data.getMonth()+1)
        // +'/'+negociacao.data.getFullYear();

        //console.log(negociacao);

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._mensagemView.update(this._mensagem);  
       
        this._limpaFormulario();
        //console.log(this._listaNegociacoes.negociacoes);

    }

    _criaNegociacao() {

       return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value);

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

        
}