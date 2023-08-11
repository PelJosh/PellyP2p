"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = require("./db/connect");
const usercontroller_1 = require("./src/controllers/usercontroller");
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const database = yield (0, connect_1.connectToDatabase)();
    });
}
main().catch(console.error);
app.get("/api/v1/", (req, res) => {
    res.send("Express + Typescript server");
});
app
    .route("/api/v1/user")
    .post(usercontroller_1.createUser)
    .get(usercontroller_1.getAllUser);
app
    .route('/api/v1/user/:id')
    .get(usercontroller_1.getUser)
    .patch(usercontroller_1.updateUser)
    .delete(usercontroller_1.deleteUser);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
