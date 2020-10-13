"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Routes_1 = __importDefault(require("./Routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(Routes_1.default);
app.listen(process.env.PORT || 3333, () => {
    console.log('##### Server started #####');
});
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'build', 'index.html'));
});
