import { Router } from "express";
import {
    changePassword,
    sendForgotPasswordCode,
    sendVerificationCode,
    signin,
    signout,
    signup,
    verifyForgotPasswordCode,
    verifyVerificationCode,
} from "../controllers/user.controller.js";
import { identifier } from "../middlewares/indentification.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Server is running ok")
})

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", identifier, signout);
router.patch("/send-verification-code", identifier, sendVerificationCode);
router.patch("/verify-verification-code", identifier, verifyVerificationCode);
router.patch("/change-password", identifier, changePassword);
router.patch("/send-fp-code", sendForgotPasswordCode);
router.patch("/verify-fp-code", verifyForgotPasswordCode);

export default router;
