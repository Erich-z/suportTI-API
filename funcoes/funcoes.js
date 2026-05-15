import Chamado from "../Model/chamado.js";

export async function listarChamados() {

    const resposta = {

        fulfillmentMessages: []

    };

    try {

        const chamado = new Chamado();

        const listaChamados =
            await chamado.consultar();

        const mensagens = [];

        mensagens.push("📋 Chamados cadastrados:\n");

        for (const item of listaChamados) {

            mensagens.push(
                `👤 Usuário: ${item.usuario}`
            );

            mensagens.push(
                `🛠 Problema: ${item.tipoProblema}`
            );

            mensagens.push(
                `⚠ Urgência: ${item.urgencia}`
            );

            mensagens.push(
                "━━━━━━━━━━━━━━━"
            );

        }

        resposta.fulfillmentMessages.push({

            text: {
                text: mensagens
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