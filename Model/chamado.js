import ChamadoDB from "../DB/chamadoDB.js";

export default class Chamado {

    #codigo
    #descricao
    #usuario
    #tipoProblema
    #urgencia

    constructor(
        codigo,
        descricao,
        usuario,
        tipoProblema,
        urgencia
    ) {

        this.#codigo = codigo
        this.#descricao = descricao
        this.#usuario = usuario
        this.#tipoProblema = tipoProblema
        this.#urgencia = urgencia

    }

    get codigo() {
        return this.#codigo
    }

    get descricao() {
        return this.#descricao
    }

    get usuario() {
        return this.#usuario
    }

    get tipoProblema() {
        return this.#tipoProblema
    }

    get urgencia() {
        return this.#urgencia
    }

    set codigo(codigo) {
        this.#codigo = codigo
    }

    set descricao(descricao) {
        this.#descricao = descricao
    }

    set usuario(usuario) {
        this.#usuario = usuario
    }

    set tipoProblema(tipoProblema) {
        this.#tipoProblema = tipoProblema
    }

    set urgencia(urgencia) {
        this.#urgencia = urgencia
    }

    toJSON() {

        return {

            codigo: this.#codigo,
            descricao: this.#descricao,
            usuario: this.#usuario,
            tipoProblema: this.#tipoProblema,
            urgencia: this.#urgencia

        }

    }

    async gravar(){}
    async alterar(){}
    async excluir(){}

    async consultar(){

        const chamadoDB = new ChamadoDB();

        return await chamadoDB.consultar();

    }

}