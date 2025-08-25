import { Router } from "express";
import { test, crearColor, LeerColores } from "../controllers/color.controllers.js";

const router = new Router()

router.route('/test').get(test)
router.route('/').post(crearColor).get(LeerColores);

export default router