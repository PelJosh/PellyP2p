"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const url = 'mongodb://localhost:27017/p2p';
mongoose_1.default.connect(url)
    .then(result => app.listen(PORT, () => console.log(`app running on port ${PORT}`)))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('hello word');
});
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
