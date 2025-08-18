import { Router } from "express";
import { test, crearColor } from "../controllers/color.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearColor)

export default router