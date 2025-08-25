import { Router } from "express";
import { test, crearColor, LeerColores, editarColorPorId } from "../controllers/color.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearColor).get(LeerColores);
router.route('/:id').put(editarColorPorId)

export default router