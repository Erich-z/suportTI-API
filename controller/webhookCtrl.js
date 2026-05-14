import { listarChamados }
    from "../funcoes/funcoes.js";

export default class WebhookCtrl {

    async webhook(req, resp) {

        const resposta =
            await listarChamados();

        resp.json(resposta);

    }

}