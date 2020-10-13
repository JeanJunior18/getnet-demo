"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignUp_1 = __importDefault(require("../controllers/SignUp"));
const routes = express_1.Router();
const signUpController = new SignUp_1.default();
routes.post('/signup', signUpController.create);
exports.default = routes;
