import Joi from "joi";

// sign up validation =====================
const signupSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ["com", "net"] },
        }),
    password: Joi.string()
        .required()
        .pattern(
            new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            )
        ),
});

// sign in validation =====================
const signinSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ["com", "net"] },
        }),
    password: Joi.string()
        .required()
        .pattern(
            new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            )
        ),
});

// code validation schema ===================
const acceptCodeSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ["com", "net"] },
        }),
    providedCode: Joi.number().required(),
});

// chaneg password validation =================
const changePasswordSchema = Joi.object({
    newPassword: Joi.string()
        .required()
        .pattern(
            new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            )
        ),
    oldPassword: Joi.string()
        .required()
        .pattern(
            new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
            )
        ),
});

export { signupSchema, signinSchema, acceptCodeSchema, changePasswordSchema };
