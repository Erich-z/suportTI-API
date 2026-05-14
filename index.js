import express from 'express';
import dotenv from 'dotenv';

import rotaChamado from './routes/rotaChamado.js';
import rotaWebhook from './routes/rotaWebhook.js';


dotenv.config();

const porta = 3000;

const host = '0.0.0.0';

const app = express();

app.use(express.json());

app.use('/chamado', rotaChamado);
app.use('/webhook', rotaWebhook);

app.listen(porta, host, () => {

    console.log(
        `Servidor rodando em http://${host}:${porta}`
    );

});