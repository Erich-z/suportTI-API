import Chamado from "../Model/chamado.js";

export async function listarChamados() {

    const resposta = {

        fulfillmentMessages: []

    };

    try {

        const chamado = new Chamado();

        const listaChamados =
            await chamado.consultar();

        let texto = "Chamados cadastrados:\n\n";

        for (const item of listaChamados) {

            texto +=
                `Usuário: ${item.usuario}\n`;

            texto +=
                `Problema: ${item.tipoProblema}\n`;

            texto +=
                `Urgência: ${item.urgencia}\n\n`;

        }

        resposta.fulfillmentMessages.push({

            text: {
                text: [texto]
            }

        });

    }
    catch (erro) {

        console.log(erro);

        resposta.fulfillmentMessages.push({

            text: {
                text: [
                    "Erro ao consultar chamados",
                    String(erro)
                ]
            }

        });

    }

    return resposta;

}