import express from "express";

import validate from "../middlewares/validate.js";
import UserSchema from "../schemas/user-schema.js";
import { login, signup } from "../controllers/users-controller.js";

const router = express.Router();

router.post("/signup", validate(UserSchema), signup);
router.post("/login", login);

export default router;
