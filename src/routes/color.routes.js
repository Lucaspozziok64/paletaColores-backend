import { Router } from "express";
import { test, crearColor, LeerColores, editarColorPorId, borrarColorPorId, leerColorPorId } from "../controllers/color.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearColor).get(LeerColores);
router.route('/:id').put(editarColorPorId).delete(borrarColorPorId).get(leerColorPorId)

export default router