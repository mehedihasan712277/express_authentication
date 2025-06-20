import { createHmac } from "crypto";
import { hash, compare } from "bcryptjs";

const doHash = (value, saltValue) => {
    const result = hash(value, saltValue);
    return result;
};

const doHashValidation = (value, hashedValue) => {
    const result = compare(value, hashedValue);
    return result;
};

const hmacProcess = (value, key) => {
    const result = createHmac("sha256", key).update(value).digest("hex");
    return result;
};

export { doHash, doHashValidation, hmacProcess };
