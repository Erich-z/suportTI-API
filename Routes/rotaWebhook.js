import { Router } from "express";

import WebhookCtrl from "../Controller/webhookCtrl.js";

const rotaWebhook = Router();

const webhookCtrl = new WebhookCtrl();

rotaWebhook.post(
    "/",
    webhookCtrl.webhook
);

export default rotaWebhook;