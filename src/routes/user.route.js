import { Router } from "express";
import {
    sendVerificationCode,
    signin,
    signout,
    signup,
    verifyVerificationCode,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.patch("/send-verification-code", sendVerificationCode);
router.patch("/verify-verification-code", verifyVerificationCode);

export default router;
