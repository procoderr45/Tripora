import app from "./app.js";
import connectToDb from "./config/db.js";

const PORT = process.env.PORT || 3000;

connectToDb()
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log("Server listening");
        });
    })
    .catch((err) => {
        console.log(err);
    });
