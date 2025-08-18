import { Router } from "express";
import { test } from "../controllers/color.controllers.js";

const router = new Router()

router.route('/test').get(test)

export default router