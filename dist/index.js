"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routers/routes"));
// import { json, urlencoded }
dotenv_1.default.config({ path: ".env" });
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1", routes_1.default);
app.get("*", (req, res) => {
    res.status(404).send({ message: "unauthorized", status: "false" });
});
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map