import { Router } from "express";
import colorRoutes from "./color.routes.js";

const router = new Router()

router.use('/color', colorRoutes)

export default router
