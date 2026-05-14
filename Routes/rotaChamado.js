import { Router } from "express";
import ChamadoCtrl from "../Controller/chamadoCtrl.js";

const rotaChamado = Router();

const chamadoCtrl = new ChamadoCtrl();

rotaChamado.get("/", chamadoCtrl.consultar);

export default rotaChamado;