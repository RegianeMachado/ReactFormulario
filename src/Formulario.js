import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp'

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome de livro'
            },
            {
                campo: 'preco',
                metodo: 'isEmpty',
                args: [{ min: 0, max: 9999 }],
                validoQuando: false,
                mensagem: 'Entre com um valor'
            },

        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
           
        }
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome" className="input-field">Nome</label>
                        <input
                            className="Validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input
                            className="Validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input
                            className="Validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light btn indigo darken-2">Salvar</button>
            </form>
        )
    }
}

export default Formulario;
