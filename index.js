import { app } from "./src/app.js";
import connectDB from "./src/db/db.js";

const port = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`the server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
    