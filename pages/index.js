import React, { Component } from "react";
import { observer } from "mobx-react";

@observer(["consultarDocumentos"])
class IndexPage extends Component {

    state = { loading : false };

    componentDidMount() {

        this.setState({ loading : true });
        this.props.consultarDocumentos.loadNomes()
        .then(() => {
            this.setState({ loading: false })
        });
    }

    addNome = () => {
        const nome = this.refs.nome.value;
        this.props.consultarDocumentos.addNome(nome);        
    }

    render() {
        return (
            <div>
            <div>
                Adicionar
                <input type="text" ref="nome" />
                <br />
                <button onClick={this.addNome}>adicionar</button>
            </div>   

            <div>
                <h2>Filtro:</h2>
                <input type="text" ref="filtro" onChange={e => this.props.consultarDocumentos.filtro = e.target.value}/>
            </div> 
            { this.state.loading && 'Loading...'}
            { !this.state.loading && (
                <ul>
                    {this.props.consultarDocumentos.resultadosFiltrados.map(n => <li key={n}>{n}</li>)}
                </ul>
            )}
            </div>
        );
    }
}

export default IndexPage;