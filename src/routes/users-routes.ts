import express from "express";

import validate from "../middlewares/validate.js";
import { RegisterSchema, LoginSchema } from "../schemas/user-schema.js";
import { login, register } from "../controllers/users-controller.js";

const router = express.Router();

router.post("/register", validate(RegisterSchema), register);
router.post("/login", validate(LoginSchema), login);

export default router;
