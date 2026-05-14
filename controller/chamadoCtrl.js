import Chamado from "../Model/chamado.js";

export default class ChamadoCtrl {

    gravar(req, resp){

        if(req.method == "POST"){

            const descricao = req.body.descricao;
            const id_usuario = req.body.id_usuario;
            const id_tipo = req.body.id_tipo;
            const id_urgencia = req.body.id_urgencia;

            const chamado = new Chamado(
                0,
                descricao,
                id_usuario,
                id_tipo,
                id_urgencia
            );

            chamado.gravar()
            .then(() => {

                resp.status(200).json({
                    status: "true",
                    mensagem: "Chamado gravado com sucesso"
                });

            })
            .catch((erro) => {

                resp.status(500).json({
                    status: "false",
                    mensagem: erro.message
                });

            });

        }
        else{

            resp.status(405).json({
                status:"false",
                mensagem:"Método não permitido"
            });

        }

    }

    alterar(req, resp){}

    excluir(req, resp){}

    consultar(req, resp){

        if(req.method == "GET"){

            const chamado = new Chamado();

            chamado.consultar()
            .then((listaChamados) => {

                resp.status(200).json({
                    status: "true",
                    chamados: listaChamados
                });

            })
            .catch((erro) => {

                resp.status(500).json({
                    status:"false",
                    mensagem: erro.message
                });

            });

        }
        else{

            resp.status(405).json({
                status:"false",
                mensagem:"Método não permitido"
            });

        }

    }

}