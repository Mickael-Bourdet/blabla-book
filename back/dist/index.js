import "dotenv/config";
import express from "express";
import cors from "cors";
// Run Application
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("test 2");
});
// Start
app.listen(process.env.PORT, () => {
    console.log(`Listening on API running ${process.env.BASE_URL}:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map