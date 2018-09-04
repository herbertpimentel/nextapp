import mobx, { observable, action, computed, runInAction } from "mobx";

//mobx.configure({ enforceActions: true });

class consultarDocumentos {


    @observable
    hash = "";

    @observable
    resultados = [];

    @observable
    filtro = null;
    
    @computed get
    resultadosFiltrados(){
        const matchesFilter = new RegExp(this.filtro, "i");
        return this.resultados.filter(nome => {
            return (!this.filtro || this.filtro == "" || matchesFilter.test(nome));
        });
    }


    requestNomes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    "beto",
                    "finho",
                    "teleco",
                    "mari"
                ])
            }, 3000);
        })
    }

    @action
    loadNomes = async () => {
        // const self = this;
        const nomes = await this.requestNomes()

            this.resultados.replace(nomes);

            //this.resultados = nomes;
    }

    
    @action
    addNome(nome){
        this.resultados.push(nome);
    }
}

export default new consultarDocumentos();
