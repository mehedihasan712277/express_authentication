import { Router } from "express";
import {
    changePassword,
    sendVerificationCode,
    signin,
    signout,
    signup,
    verifyVerificationCode,
} from "../controllers/user.controller.js";
import { identifier } from "../middlewares/indentification.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", identifier, signout);
router.patch("/send-verification-code", identifier, sendVerificationCode);
router.patch("/verify-verification-code", identifier, verifyVerificationCode);
router.patch("/change-password", identifier, changePassword);

export default router;
