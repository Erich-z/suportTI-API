import obterConexao from "./conexao.js";
import Chamado from "../Model/chamado.js";

export default class ChamadoDB {

    async gravar(chamado) {}

    async alterar(chamado) {}

    async excluir(chamado) {}

   async consultar() {

    const conexao = await obterConexao();

    const sql = `
        SELECT

            c.id_chamado,
            c.descricao,

            u.nome AS usuario,

            tp.nome_tipo AS tipoProblema,

            urg.nivel AS urgencia

        FROM chamados c

        INNER JOIN usuarios u
        ON c.id_usuario = u.id_usuario

        INNER JOIN tipos_problema tp
        ON c.id_tipo = tp.id_tipo

        INNER JOIN urgencias urg
        ON c.id_urgencia = urg.id_urgencia
    `;

    const [resultados, campos] =
    await conexao.query(sql);

    const listaChamados = [];

    for (const resultado of resultados) {

        const chamado = new Chamado(

            resultado.id_chamado,
            resultado.descricao,
            resultado.usuario,
            resultado.tipoProblema,
            resultado.urgencia

        );

        listaChamados.push(chamado);

    }

    return listaChamados;

}

}