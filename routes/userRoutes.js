import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/login", userController.loginForm);


router.post("/register", userController.register);
router.get("/register", userController.registerForm);


export default router;